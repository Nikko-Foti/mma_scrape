const axios = require('axios');
const sherdog = require('sherdog');
const ufc = require('ufc');
const { 
    sendError, 
    sendResponse 
} = require('./commonUtil.js');

const { db } = require('./config');

// Get all ufc fighters from UFC api.
function getUfcFighters() {
    axios.get('http://ufc-data-api.ufc.com/api/v3/iphone/fighters')
        .then((fighters) => {
            const fighterUrlObjects = new Array;
            // Invoking function that loops through allRankedFighters, finds corresponding ufcFighter object
            // and then invokes searchAndInsert with ufcFighterObject and corresponding sherdog url.
            db.collection('fighter_urls').get()
                .then(list => {
                    list.forEach((doc) => {
                        fighterUrlObjects.push(doc.data());
                    });
                    matchRankedFighters(fighters.data, fighterUrlObjects);
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(`Error querying UFC api: ${err}`);
        });
}

function matchRankedFighters(ufcRankedFighters, allRankedFighters) {
    let i = 0;
    function loop() {
        const random = Math.floor(Math.random() * 7000) + 3000;      
        setTimeout(() => {
            const ufcRankedFighter = ufcRankedFighters.find((ufcRankedFighter) => {
                return allRankedFighters[i].name == `${ufcRankedFighter.first_name} ${ufcRankedFighter.last_name}`;
            });
            if (ufcRankedFighter) {
                searchAndInsert(ufcRankedFighter, allRankedFighters[i].url);
            } else {
                console.log(`Could not find corresponding ufc object for ${allRankedFighters[i].name}`);
            }
            i++;
            if (i < allRankedFighters.length) {
                loop();
            }
        }, random);
    }
    if (i < allRankedFighters.length) {
        loop();  
    }
}

// Performs sherdog search on fighter, constructs object to be stored in Firestore using data from sherdog and
// ufc fighter object and inserts that object into database.
function searchAndInsert(ufcApiFighter, sherdogUrl) {
    // Using sherdog package to get detailed fighter data.
    console.log(`Searching for ${sherdogUrl}`);
    sherdog.getFighter(sherdogUrl, (sherdogFighterData) => {
        const ufcUrl = `http://www.ufc.com/fighter/${ufcApiFighter.first_name.replace(/ +/g, "-")}-${ufcApiFighter.last_name.replace(/ +/g, "-")}`;
        console.log(`Searching for ${ufcUrl}`);
        ufc.getFighter(ufcUrl, (ufcScrapedFighter) => {
            // Creating object that we will insert into Firestore.
            const fighterFirestoreObject = createFirestoreObject(sherdogFighterData, ufcScrapedFighter, ufcApiFighter);
            // Creating variables that will be used in the firestore insertion query.
            const weightClassCollection = fighterFirestoreObject.weight_class.toLowerCase();
            const fighterDocument = fighterFirestoreObject.first_name.toLowerCase() + '-' + fighterFirestoreObject.last_name.toLowerCase();
            console.log(`Persisting ${fighterDocument} data`);
            // console.log('Here is what is being stored in Firestore:');
            // console.log(fighterFirestoreObject);
            // Insert fighter data into Firestore.            
            db.collection(weightClassCollection).doc(fighterDocument).set(fighterFirestoreObject)
                .then(ref => {
                    console.log(ref);
                }).catch(error => {
                    console.log(err);
                });
        });
    });
}

function createFirestoreObject(sherdogFighterData, ufcScrapedFighter, correspondingUfcObject) {
    // Need to parse sherdogFighterData.fights.url. Fights is an array. So I am going to have to loop through it and extract the name of the event out of the url string.
    sherdogFighterData.fights.forEach((fight) => {
        fight.event = fight.url.slice(8, -6);
    });
    
    return {
        first_name: correspondingUfcObject.first_name,
        last_name: correspondingUfcObject.last_name,
        nickname: sherdogFighterData.nickname,
        association: sherdogFighterData.association,
        hometown: ufcScrapedFighter.hometown,
        location: ufcScrapedFighter.location,
        nationality: sherdogFighterData.nationality,
        age: sherdogFighterData.age,
        birthday: sherdogFighterData.birthday,
        height: ufcScrapedFighter.height,
        college: ufcScrapedFighter.college,
        degree: ufcScrapedFighter.degree,
        style: ufcScrapedFighter.summary,
        weight_class: correspondingUfcObject.weight_class ? correspondingUfcObject.weight_class : sherdogFighterData.weight_class,
        rank: correspondingUfcObject.rank,
        wins: sherdogFighterData.wins,
        losses: sherdogFighterData.losses,
        draws: correspondingUfcObject.draws,
        no_contests: sherdogFighterData.no_contests,
        strikes: ufcScrapedFighter.strikes,
        takedowns: ufcScrapedFighter.takedowns,
        thumbnail: correspondingUfcObject.thumbnail,
        belt_thumbnail: correspondingUfcObject.belt_thumbnail ? correspondingUfcObject.belt_thumbnail : '',
        left_full_body_image: correspondingUfcObject.left_full_body_image,
        right_full_body_image: correspondingUfcObject.right_full_body_image,
        profile_image: correspondingUfcObject.profile_image,
        fights: sherdogFighterData.fights
    }
}

// Example fighter object that is returned from UFC API.
// {
//     "id": 241895,
//     "nickname": null,
//     "wins": 19,
//     "statid": 1194,
//     "losses": 1,
//     "last_name": "Cyborg",
//     "weight_class": "Women_Featherweight",
//     "title_holder": true,
//     "draws": 0,
//     "first_name": "Cris",
//     "fighter_status": "Active",
//     "rank": "C",
//     "pound_for_pound_rank": "9",
//     "thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FCris-Cyborg%252FCris-Cyborg_241895_medium_thumbnail.jpg?w640-h320-tc1",
//     "belt_thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L-CHAMP-PRINT.png?w600-h600-tc1",
//     "left_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L.png?mh530",
//     "right_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L-CHAMP.png?mh530",
//     "profile_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS.png?w600-h600-tc1",
//     "link": "http://www.ufc.com/fighter/Cris-Cyborg"
// }

// Example fighter object that is returned from ufc.com fighter scrape.
// {
//     "name": "Jon Jones",
//     "nickname": "Bones",
//     "fullname": "Jon \"Bones\" Jones",
//     "hometown": "Rochester, New York USA",
//     "location": "Endicott, New York USA",
//     "age": "27",
//     "height": "6' 4\"",
//     "height_cm": "193",
//     "weight": "205",
//     "weight_kg": "93",
//     "record": "21-1-0",
//     "college": "Iowa Central",
//     "degree": "Associates Degree",
//     "summary": [
//       "Wrestling",
//       "jiu-jitsu",
//       "muay thai"
//     ],
//     "strikes": {
//       "attempted": 1679,
//       "successful": 916,
//       "standing": 541,
//       "clinch": 188,
//       "ground": 187
//     },
//     "takedowns": {
//       "attempted": 64,
//       "successful": 33,
//       "submissions": 10,
//       "passes": 22,
//       "sweeps": 0
//     }
//     "fights": []
//   }

// Example fighter objedct returned from sherdog fighter scrape.
// {
// name: 'Demetrious Johnson',
//   nickname: 'Mighty Mouse',
//   age: '31',
//   birthday: '1986-08-13',
//   locality: 'Kirkland, Washington',
//   nationality: 'United States',
//   association: 'AMC Pankration',
//   height: '5\'3"',
//   weight: '125 lbs',
//   weight_class: 'Flyweight',
//   wins:
//    { total: 27,
//      knockouts: 5,
//      submissions: 11,
//      decisions: 11,
//      others: 0 },
//   losses: { total: 2, knockouts: 0, submissions: 0, decisions: 2, others: 0 },
//   no_contests: 1,
//   fights: []
// }

module.exports = {
    getUfcFighters
}