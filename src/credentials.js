require('dotenv').config();

const BEARER_TOKEN = process.env.BEARER_TOKEN;
const TEST_DB_USERNAME = process.env.TEST_DB_USERNAME;
const TEST_DB_PASSWORD = process.env.TEST_DB_PASSWORD;
const TEST_DB_DATABASE = process.env.TEST_DB_DATABASE;
const TEST_DB_HOST = process.env.TEST_DB_HOST;
const TEST_DB_DIALECT = process.env.TEST_DB_DIALECT;
const TEST_DB_PORT = process.env.TEST_DB_PORT;
const PRODUCTION_DB_USERNAME = process.env.PRODUCTION_DB_USERNAME;
const PRODUCTION_DB_PASSWORD = process.env.PRODUCTION_DB_PASSWORD;
const PRODUCTION_DB_DATABASE = process.env.PRODUCTION_DB_DATABASE;
const PRODUCTION_DB_HOST = process.env.PRODUCTION_DB_HOST;
const PRODUCTION_DB_DIALECT = process.env.PRODUCTION_DB_DIALECT;
const PRODUCTION_DB_PORT = process.env.PRODUCTION_DB_PORT;
const SESSION_KEY = process.env.SESSION_KEY;


module.exports = {
    BEARER_TOKEN, 
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
    PRODUCTION_DB_PORT,
    SESSION_KEY
}