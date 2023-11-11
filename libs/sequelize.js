const {Sequelize} = require('sequelize');

const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
let URI = `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

if(config.isProd){
  URI = config.connectionString; // for conecting with vercel
}

// models
const { setupModels } = require('../db/models');

const options = {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: config.isProd ? false : true,
};
if(config.isProd){
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(URI, options); //it already use pool connection

setupModels(sequelize);
// sequelize.sync(); // sync all models with database, creating tables if not exists

module.exports = sequelize;