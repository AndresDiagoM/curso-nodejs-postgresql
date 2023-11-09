const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// for conecting with vercel
const URI_vercel = config.connectionString;

module.exports = {
  development: {
    url: URI_vercel,
    dialect: 'postgres',
    dialectOptions: {
      multipleStatements: true
    }
  },
  test: {
    url: URI,
    dialect: 'postgres',
    dialectOptions: {
      multipleStatements: true
    }
  },
  production: {
    url: URI_vercel,
    dialect: 'postgres',
    dialectOptions: {
      multipleStatements: true
    }
  }
};