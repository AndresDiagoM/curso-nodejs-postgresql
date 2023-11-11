const {Pool} = require('pg');

const config = require('../config/config');

const options ={};

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
let URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

if(config.isProd){
  options.connectionString = config.connectionString;
  options.ssl =  {
    rejectUnauthorized: false
  };
} else {
  options.connectionString = URI;
}

const pool = new Pool(options);

module.exports = pool;