const express = require('express')
const app = express();
const axios = require('axios');
const mma = require('mma');

const { getFighters } = require('./src/searchAndInsert');

getFighters();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.get('/scrape', function(req, res) {
    
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });