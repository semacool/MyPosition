'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const jsonParser = express.json();

app.get('/hello', (req, res, next) => {
    console.log('step 1');
    next();
}, (req, res, next) => {
    console.log('step 2');
    res.send('hello');
});

app.post('/api/signup', jsonParser, (req, res) => {
    res.json(req.body);
});

app.listen(4000, () => {
    console.log('Server started on 4000 port - AHAHAHAHAHA');
})