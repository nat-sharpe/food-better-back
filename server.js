const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dummyDatabase = [
  {
    id: 10,
    allowed: true,
    name: 'Low Fat Peanut Butter',
    brand: 'JIF',
    imageURL: 'https://images.freshop.com/00051500240908/5df3822b3c65c7aa03f12e2910385084_large.png',
    carbs: 10,
    calories: 20,
    organic: false,
    vegan: true,
    glutenFree: true,
  }
];

const checkAllowed = scannedItem => {
  let itemData = dummyDatabase.find(item => {
    item.id === scannedItem.id
  });
  // let itemData = dummyDatabase[0];
  itemData.allowed = true;

  if (scannedItem.maxCarbs && scannedItem.maxCarbs < itemData.carbs) {
    itemData.allowed = false;
  } else if (scannedItem.maxCalories && scannedItem.maxCalories < itemData.calories) {
    itemData.allowed = false;
  } else if ((scannedItem.organic === true) && (itemData.organic === false)) {
    itemData.allowed = false;
  } else if ((scannedItem.vegan === true) && (itemData.vegan === false)) {
    itemData.allowed = false;
  } else if ((scannedItem.glutenFree === true) && (itemData.glutenFree === false)) {
    itemData.allowed = false;
  }
  return itemData;
}

app.post('/scan', (req, res) => {
  let item = req.body;
  let response = checkAllowed(item);
  res.end(JSON.stringify(response));
});


app.get('/', (req, res) => {
 res.end('home page');
});

app.get('/about', (req, res) => {
 res.end('about page');
});

app.listen(3000);