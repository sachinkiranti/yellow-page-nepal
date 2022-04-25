import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      dateStrings: true,
    },
    pool: {
      min: 2,
      max: 3,
    },
    migrations: {
      directory: 'migrations',
      tableName: 'migrations',
    },
  },
  staging: {
    client: 'postgresql',
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      dateStrings: true,
    },
    pool: {
      min: 2,
      max: 3,
    },
    migrations: {
      directory: 'migrations',
      tableName: 'migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      dateStrings: true,
    },
    pool: {
      min: 2,
      max: 3,
    },
    migrations: {
      directory: 'migrations',
      tableName: 'migrations',
    },
  },
};
