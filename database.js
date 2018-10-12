// const dotenv = require('dotenv');
// dotenv.config();
const pg = require("pg-promise")();
const DBConfig = "postgres://localhost:5432/ubuntu";
const DB = pg(DBConfig);

module.exports = DB;