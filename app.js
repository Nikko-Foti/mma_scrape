const express = require('express')
const app = express();

const admin = require('firebase-admin');
var serviceAccount = require('./src/mma-scrape-firebase.json');
const axios = require('axios');

const { getUfcFighters } = require('./src/scrapeAndInsert');
const { scrapeRankedUfcFighters } = require('./src/updateRankedFighters.js');

getUfcFighters();
// scrapeRankedUfcFighters();
