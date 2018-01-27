const axios = require('axios');
const mma = require('mma');
const { queries } = require('./config.js');
const { 
    getCassandraClient, 
    sendError, 
    sendResponse 
} = require('./commonUtil.js');

function normalizeInts(searchResults) {
    const wins = searchResults.wins;
    const losses = searchResults.losses;
    const strikes = searchResults.strikes;
    const takedowns = searchResults.takedowns;

    for (var key in wins) {
        if(!Number.isInteger(wins[key])) {
            wins[key] = 0;
        }
    }
    for (var key in losses) {
        if(!Number.isInteger(losses[key])) {
            losses[key] = 0;
        }
    }
    for (var key in strikes) {
        if(!Number.isInteger(strikes[key])) {
            strikes[key] = 0;
        }
    }
    for (var key in takedowns) {
        if(!Number.isInteger(wins[key])) {
            takedowns[key] = 0;
        }
    }
    return searchResults;
}

function createParams(searchFighter, fighterObject) {
    // Need to parse searchFighter.fights.url. Fights is an array. So I am going to have to loop through it and extract the name of the event out of the url string.
    searchFighter.fights.forEach((fight) => {
        fight.event = fight.url.slice(8, -6);
    });
    // Need to write test for this method.
    const searchResults = normalizeInts(searchFighter);
    return [
        fighterObject.first_name,
        fighterObject.last_name,
        searchResults.nickname,
        searchResults.association,
        searchResults.hometown,
        searchResults.nationality,
        searchResults.age,
        searchResults.height,
        searchResults.college,
        searchResults.degree,
        searchResults.summary,
        fighterObject.weight_class,
        fighterObject.rank,
        searchResults.wins,
        searchResults.losses,
        fighterObject.draws,
        searchResults.strikes,
        searchResults.takedowns,
        fighterObject.thumbnail,
        fighterObject.belt_thumbnail,
        fighterObject.left_full_body_image,
        fighterObject.right_full_body_image,
        fighterObject.profile_image,
        searchResults.fights
    ]
}

function getQuery(weightClass) {
    switch(weightClass) {
        case 'Flyweight':
            return queries.insertFlyweightQuery;
            break;
        case 'Bantamweight':
            return queries.insertBantamweightQuery;
            break;
        case 'Featherweight':
            return queries.insertFeatherweightQuery;
            break;
        case 'Lightweight':
            return queries.insertLightweightQuery;
            break;
        case 'Welterweight':
            return queries.insertWelterweightQuery;
            break;
        case 'Middleweight':
            return queries.insertMiddleweightQuery;
            break;
        case 'Light_Heavyweight':
            return queries.insertLight_HeavyweightQuery;
            break;
        case 'Heavyweight':
            return queries.insertHeavyweightQuery;
            break;
        case 'Women_Strawweight':
            return queries.insertWomen_StrawweightQuery;
            break;
        case 'Women_Bantamweight':
            return queries.insertWomen_BantamweightQuery;
            break;
        case 'Women_Featherweight':
            return queries.insertWomen_FeatherweightQuery;
            break;
    }
}

function searchAndQueryFighters(fighters) {
    let i = 0;
    const client = getCassandraClient();
    
    function loop() {
        // Every 50 searches the scraper will stop for 10-12hrs.
        const random = i % 50 == 0 ? Math.floor(Math.random() * 54000000) + 36000000 : Math.floor(Math.random() * 2700000) + 1500000;
        setTimeout(() => {
            // Assigning current fighter name of current fighter object being iterated over to variable
            // to be searched via mma.fighter method.
            const fighterName = `${fighters[i].first_name} ${fighters[i].last_name}`;
            // fighterToBeSearched variable is an object used to create Cassandra insertion params.
            const fighterToBeSearched = fighters[i];
            try {
                // Search for fighter with mma.fighter method.                
                mma.fighter(fighterName, (data) => {
                    const params = createParams(data, fighterToBeSearched);
                    const query = getQuery(params[11]);
                    console.log('Here are the params');              
                    console.log(params);
                    // Insert fighter data into Cassandra.
                    client.execute(query, params, { prepare: true }, (err, response) => {
                        if (err) {
                            console.log(`Failed to execute query: ${err}`);
                        } 
                        console.log('Query was executed successfully.', response);
                    });
                });
            } catch(error) {
                console.log(`Caught this error trying to search for fighter: ${error}`);
                // If Google blocked request, wait one day and make the request again.
                setTimeout(() => {
                    loop();
                }, 86400000);
            }
            i++;
            if (i <= fighters.length) {
                loop();
            }
        }, random);
    }
    if (i <= fighters.length) {
        loop();  
    }
    client.shutdown();
}

function getFighters() {
    const url = 'http://ufc-data-api.ufc.com/api/v3/iphone/fighters';
    axios.get(url)
        .then((fighters) => {
            searchAndQueryFighters(fighters.data);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
}

module.exports = {
    getFighters,
    createParams,
    normalizeInts
}