const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

mongoose.connect('mongodb://buyFood:buyFood@localhost:27017/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        dbName: 'buyFood' // not working on connection string
    }
);

const app = express();
app.use(express.json());
app.use(router);

module.exports = app;
