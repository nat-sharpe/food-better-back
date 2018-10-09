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
    id: '1',
    allowed: true,
    name: 'Creamy Peanut Butter',
    brand: 'Peter Pan',
    imageURL: 'https://lh3.googleusercontent.com/proxy/YwCPZgrjfS4RoNX7Mqkt2GjFIPNNrTxL6tiXA2imSIOQKPbiEWai_13CnH8ifNvijCOYdKVX7sg94hgsQdTg_I4_oEP0oFg9VmWaSa4alQfwN23WdVJDRVi1d6I7z8Yj4JZhVxY_XGyVmdqNveVByVj3J7EhjByJiLtxI-B1h23G2L4zYg=s500-pd-e365-rw-pc0xffffff',
    carbs: 16,
    calories: 220,
    organic: false,
    vegan: false,
    glutenFree: true,
  },
  {
    id: '2',
    allowed: true,
    name: 'Reduced Fat Crunchy Peanut Butter',
    brand: 'Jif',
    imageURL: 'https://lh3.googleusercontent.com/proxy/UQUtrqFlB2Z51RPSwBrDS_vnAf_kzyOVYpxpN2CICpyvJ_lIrJpEvEXWV41LCYdjEQWnOBZVKUs_V-KiEu_fFLh7vPYAcTNtFwt_Wp1QgEYEzHjvOAlp93z6GniIRtHqW3nq9ArjovTsLIoNAauEs0xy8muUqRGoLbjd6-4jjoasDKtBj6Y=s500-pd-e365-rw-pc0xffffff',
    carbs: 6,
    calories: 70,
    organic: false,
    vegan: true,
    glutenFree: true,
  },
  {
    id: '20',
    allowed: true,
    name: 'Reduced Fat Creamy Peanut Butter',
    brand: 'Skippy',
    imageURL: 'https://lh3.googleusercontent.com/proxy/hfUR8oi-1wHoRLE68SNb94IpAnqF5OUx4Ho5lBPXY9R_wCBPY58BE5s-kvMHUSslH0nrOy3p5Q76Rju_U5ykeCGYIRfWFxcozZs2A3m7LMZKGYoTU93wpi-OGmOyfBTf8uDhjP-J22YveexSmipK5oEb-93GbQYl5e5p1Uy94p8WEVNedrQ=s500-pd-e365-rw-pc0xffffff',
    carbs: 14,
    calories: 180,
    organic: false,
    vegan: false,
    glutenFree: false,
  },
  {
    id: '10',
    allowed: true,
    name: 'Natural Creamy Peanut Butter',
    brand: 'Jif',
    imageURL: 'https://lh3.googleusercontent.com/proxy/IDdPfanKFWEhR9DpH-vadsrf3Wzfm-sHVL31ey7iT_SWSPdedSgpx3yabjtf2Hvm5aPcgbpXZtJzNAxiSDDCf-2jrbzyMNDg29YYjSpQ0HMgKuBu6qfMwCZbS8_pT7Kr5nNrFzwZoXV07JE5Ooqz3TggK60mXU99IIA-gM8_Li-2hhQVJHFXe4TXL6oHEJrRNL5eJyVpjjLqpdDNl-E=s500-pd-e365-rw-pc0xffffff',
    carbs: 8,
    calories: 190,
    organic: true,
    vegan: true,
    glutenFree: true,
  }
];

const checkAllowed = scannedItem => {
  let itemData = dummyDatabase.find(item => {
    return item.id === scannedItem.id;
  });
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
  console.log(item);
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