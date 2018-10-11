const dotenv = require('dotenv');
dotenv.config();
const pg = require("pg-promise")();
const DBConfig = `postgres://ubuntu:tesla@foodbetter.fun:3000/foodbetter-db`;
const DB = pg(DBConfig);

module.exports =  {DB};