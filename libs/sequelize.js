const {Sequelize} = require('sequelize');

const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `${config.dbDriver}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// for conecting with vercel
const URI_vercel = config.connectionString;

// models
const { setupModels } = require('../db/models');

const sequelize = new Sequelize(URI_vercel, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true,
}); //it already use pool connection

setupModels(sequelize);
// sequelize.sync(); // sync all models with database, creating tables if not exists


module.exports = sequelize;