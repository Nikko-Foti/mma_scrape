const express = require('express')
const app = express();

const admin = require('firebase-admin');
var serviceAccount = require('./src/mma-scrape-firebase.json');
const axios = require('axios');
const mma = require('mma');

const { getFighters } = require('./src/searchAndInsert');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

getFighters(db);