const {Sequelize} = require('sequelize');

const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// models
const { setupModels } = require('../db/models');

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true,
}); //it already use pool connection

setupModels(sequelize);
sequelize.sync(); // sync all models with database, creating tables if not exists

module.exports = sequelize; 