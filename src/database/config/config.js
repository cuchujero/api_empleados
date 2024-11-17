const { 
TEST_DB_USERNAME,
TEST_DB_PASSWORD,
TEST_DB_DATABASE,
TEST_DB_HOST,
TEST_DB_DIALECT,
TEST_DB_PORT,
PRODUCTION_DB_USERNAME,
PRODUCTION_DB_PASSWORD,
PRODUCTION_DB_DATABASE,
PRODUCTION_DB_HOST,
PRODUCTION_DB_DIALECT,
PRODUCTION_DB_PORT
}
= require('../../credentials');

module.exports = {
  "test": {
    "username": "cuchujero",
    "password": "Goku123!",
    "database": "cuchujero_dl",
    "host": "mysql-cuchujero.alwaysdata.net",
    "dialect": "mysql",
    "port": 3306
  },
  "production": {
    "username": "cuchujero",
    "password": "Goku123!",
    "database": "cuchujero_dl",
    "host": "mysql-cuchujero.alwaysdata.net",
    "dialect": "mysql",
    "port": 3306
  }
}


