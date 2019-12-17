const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/buyFood',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

module.exports = app;
