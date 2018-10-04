const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const db = require('./db');
// const dotenv = require('dotenv');
// dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/scan', (req, res) => {
  let item = req.body;
  let response = {
    status: (item.id > 4) ? false : true
  };
  res.send(JSON.stringify(response));
});


app.get('/', (req, res) => {
 res.end('home page');
});

app.get('/about', (req, res) => {
 res.end('about page');
});

app.listen(3000);