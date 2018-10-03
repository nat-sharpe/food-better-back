const express = require('express');
const app = express();
// const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
 res.end('home page');
});

app.get('/about', (req, res) => {
 res.end('about page');
});

app.listen(3000);