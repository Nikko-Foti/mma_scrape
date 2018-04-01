const cheerio = require('cheerio');
const request = require('request');
const { search } = require('./getUrls');
const { db } = require('./config');

// Scrape ufc's rankings page for ranked fighters in all weight classes.

function scrapeRankedUfcFighters() {
    const currentUfcRankedFighters = new Array;
    const fighterUrlObjects = new Array;

    request('http://www.ufc.com/rankings?id=', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            let $ = cheerio.load(html);
            $('.ranking-list a').each((index, element) => {
                currentUfcRankedFighters.push($(element).text().replace(/[\t\n]|Interim Champion|\(.*?\)/g, ''));
            });
            db.collection('fighter_urls').get()
                .then(list => {
                    list.forEach((doc) => {
                        fighterUrlObjects.push(doc.data());
                    });
                    findMissingFighters(currentUfcRankedFighters, fighterUrlObjects);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });
}

// Compare list of currentUfcRankedFighters to fighter_urls collection in db. If there are fighters
// in currentUfcRankedFighters that are not in the fighter_urls collection than push to missing
// fighters array.

function findMissingFighters(currentUfcRankedFighters, fighterUrlObjects) {
    // Creating a Set of all fighter names currently in db.
    const fighterUrlsNamesSet = new Set(fighterUrlObjects.map(fighter => { return fighter.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") }));
    // Filtering currentUfcRankedFighters that was pulled from scraping ufc site. If currentUfcRankedFighter
    // being iterated through is not a part of the fighterUrlsNamesSet then we know this is a fighter we do 
    // not currently have in the db and it is added to the missingFighters array.
    const missingFighters = currentUfcRankedFighters.filter(fighter => { return !fighterUrlsNamesSet.has(fighter.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) });
    console.log(`These are the missing fighters: ${missingFighters}`);
    addMissingFighters(missingFighters);
}

// Iterate through missing fighters array. For each iteration do google search and find sherdog URL.
// Then construct object with fighter name and sherdog url and insert into Firestore fighter_urls
// collection.

function addMissingFighters(missingFighters) {
    let i = 0;
    function loop() {
        setTimeout(() => {
            var options = {
                query: `sherdog ${missingFighters[i]}`,
                limit: 5
            };
                    
            search(options, (err, urls) => {
                if(err) console.error(err);

                const sherdogFighterUrl = findCorrectLink(
                    urls, `sherdog.com/fighter/${missingFighters[i].toLowerCase().replace(/\s+/g, '-')}`
                );
                
                if (sherdogFighterUrl) {
                    insertSherdogUrlIntoDb(
                        {
                            name: missingFighters[i],
                            url: sherdogFighterUrl
                        }
                    );
                }
                
                i++;
                if (i < missingFighters.length) {
                    loop();
                }
            });
        }, 2000);
    }
    if (i < missingFighters.length) {
        loop();
    }
}

function findCorrectLink(links, query) {
    return links.find((link) => { return link.toLowerCase().indexOf(query) > -1 });
}

function insertSherdogUrlIntoDb(firestoreFighterObject) {
    console.log('Attempting to insert:');
    console.log(firestoreFighterObject);
    db.collection('fighter_urls').doc(firestoreFighterObject.name).set(firestoreFighterObject)
        .then(ref => {
            console.log(ref);
        }).catch(error => {
            console.log(err);
        });
}

scrapeRankedUfcFighters();

// Invoke getFighters();

module.exports = {
    scrapeRankedUfcFighters
}