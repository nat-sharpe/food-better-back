// const dotenv = require('dotenv');
// dotenv.config();
const pg = require("pg-promise")();
const DBConfig = "postgres://ubuntu:food@localhost:5432/fooditems";
const DB = pg(DBConfig);

module.exports = DB;