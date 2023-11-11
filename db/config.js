const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
let URI = `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

if(config.isProd){
  URI = config.connectionString; // for conecting with vercel
}

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
      multipleStatements: true,
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
};