require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    DB_PW: process.env.DB_PW,
};
