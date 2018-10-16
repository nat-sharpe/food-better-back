const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const dummyDatabase = [
//   {
//     id: '1',
//     allowed: true,
//     name: 'Creamy Peanut Butter',
//     brand: 'Peter Pan',
//     imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61wP-m6ehjL._SY550_.jpg',
//     carbs: 16,
//     calories: 220,
//     organic: false,
//     vegan: false,
//     glutenFree: true,
//   },
//   {
//     id: '2',
//     allowed: true,
//     name: 'Reduced Fat Crunchy Peanut Butter',
//     brand: 'Jif',
//     imageURL: 'https://images-na.ssl-images-amazon.com/images/I/715dWDRHw-L._SY450_.jpg',
//     carbs: 6,
//     calories: 70,
//     organic: false,
//     vegan: true,
//     glutenFree: true,
//   },
//   {
//     id: '20',
//     allowed: true,
//     name: 'Reduced Fat Creamy Peanut Butter',
//     brand: 'Skippy',
//     imageURL: 'https://images-na.ssl-images-amazon.com/images/I/816nVBGE0qL._SL1500_.jpg',
//     carbs: 14,
//     calories: 180,
//     organic: false,
//     vegan: false,
//     glutenFree: false,
//   },
//   {
//     id: '10',
//     allowed: true,
//     name: 'Natural Creamy Peanut Butter',
//     brand: 'Jif',
//     imageURL: 'https://images-na.ssl-images-amazon.com/images/I/91i5AplQqkL._SL1500_.jpg',
//     carbs: 8,
//     calories: 190,
//     organic: true,
//     vegan: true,
//     glutenFree: true,
//   }
// ];

// const findItem = scannedItem => {
//   let itemData = dummyDatabase.find(item => {
//     return item.id === scannedItem.id;
//   });
//   return itemData;
// }

app.post('/scan', (req, res) => {
  let item = req.body;
  console.log(item);
  // let response = findItem(item);
  db.one(`SELECT * FROM items WHERE id = ${item.id}`)
      .then(data => {
        data.json()
        .then(jsonData => {
          res.end(jsonData)
        })
      })
      .catch(function (err) {
        return next(err);
      });
  // res.end(JSON.stringify(response));
});


app.get('/', (req, res) => {
 res.end('home page');
});

app.get('/about', (req, res) => {
 res.end('about page');
});

app.listen(3000);