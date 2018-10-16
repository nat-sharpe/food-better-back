const pg = require("pg-promise")();
const DBConfig = "postgres://ubuntu@localhost:5432/fooditems";
const DB = pg(DBConfig);

module.exports = DB;