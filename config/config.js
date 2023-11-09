require ('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  apiVersion: process.env.API_VERSION || 'v1',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbDriver: process.env.DB_DRIVER,
  // postgres: {
  //   host: process.env.DB_HOST || 'localhost',
  //   port: process.env.DB_PORT || 5432,

  // vercel env variables
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  vercelDbURL: process.env.POSTGRES_URL,
  vercelDbDatabase: process.env.POSTGRES_DATABASE,
  vercelDbHost: process.env.POSTGRES_HOST,
  vercelDbUser: process.env.POSTGRES_USER,
  vercelDbPassword: process.env.POSTGRES_PASSWORD,

};

module.exports = config;