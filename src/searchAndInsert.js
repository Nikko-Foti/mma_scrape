const axios = require('axios');
const mma = require('mma');
const { queries } = require('./config.js');
const { 
    sendError, 
    sendResponse 
} = require('./commonUtil.js');

function getFighters(db) {
    const url = 'http://ufc-data-api.ufc.com/api/v3/iphone/fighters';
    axios.get(url)
        .then((fighters) => {
            const rankedFighters = getRankedFighters(fighters.data);
            searchAndQueryFighters(rankedFighters, db);
        })
        .catch((err) => {
            console.log(`Error querying UFC api: ${err}`);
        });
}

function searchAndQueryFighters(fighters, db) {
    let i = 0;
    
    function loop() {
        // Every 50 searches the scraper will stop for 10-12hrs.
        const random = i % 50 == 0 && i != 0 ? Math.floor(Math.random() * 54000000) + 36000000 : Math.floor(Math.random() * 2700000) + 1500000;
        setTimeout(() => {
            // Assigning current fighter name of current fighter object being iterated over to variable
            // to be searched via mma.fighter method.
            const fighterName = `${fighters[i].first_name} ${fighters[i].last_name}`;
            // fighterToBeSearched variable is an object used to create Firestore data to be inserted.
            const fighterToBeSearched = fighters[i];
            try {
                // Search for fighter with mma.fighter method.                
                mma.fighter(fighterName, (data) => {
                    const fighterFirestoreObject = createFirestoreObject(data, fighterToBeSearched);
                    console.log('Here is the object to be persisted to Firestore:');              
                    console.log(fighterFirestoreObject);
                    // Insert fighter data into Cassandra.
                    const weightClassCollection = fighterFirestoreObject.weight_class.toLowerCase();
                    const fighterDocument = fighterFirestoreObject.first_name.toLowerCase() + '-' + fighterFirestoreObject.last_name.toLowerCase();
                    db.collection(weightClassCollection).doc(fighterDocument).set(fighterFirestoreObject)
                        .then(ref => {
                            console.log(ref);
                        }).catch(error => {
                            console.log(err);
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
}

function getRankedFighters(fighters) {
    const ranked = [];
    fighters.forEach((fighter) => {
        if (fighter.rank != null) {
            ranked.push(fighter);
        }
    });
    return ranked;
}

// TODO: need to see if this function is even necessary.
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

function createFirestoreObject(searchFighter, fighterObject) {
    // Need to parse searchFighter.fights.url. Fights is an array. So I am going to have to loop through it and extract the name of the event out of the url string.
    searchFighter.fights.forEach((fight) => {
        fight.event = fight.url.slice(8, -6);
    });
    // Need to write test for this method.
    const searchResults = normalizeInts(searchFighter);
    return {
        first_name: fighterObject.first_name,
        last_name: fighterObject.last_name,
        nickname: searchResults.nickname,
        association: searchResults.association,
        hometown: searchResults.hometown,
        nationality: searchResults.nationality,
        age: searchResults.age,
        height: searchResults.height,
        college: searchResults.college,
        degree: searchResults.degree,
        style: searchResults.summary,
        weight_class: fighterObject.weight_class,
        rank: fighterObject.rank,
        wins: searchResults.wins,
        losses: searchResults.losses,
        draws: fighterObject.draws,
        strikes: searchResults.strikes,
        takedowns: searchResults.takedowns,
        thumbnail: fighterObject.thumbnail,
        belt_thumbnail: fighterObject.belt_thumbnail,
        left_full_body_image: fighterObject.left_full_body_image,
        right_full_body_image: fighterObject.right_full_body_image,
        profile_image: fighterObject.profile_image,
        fights: searchResults.fights
    }

}

module.exports = {
    getFighters,
    normalizeInts,
}