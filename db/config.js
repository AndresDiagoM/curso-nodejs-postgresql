const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
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
    url: URI,
    dialect: 'postgres',
    dialectOptions: {
      multipleStatements: true
    }
  }
};