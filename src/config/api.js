require('dotenv').config();

const API_HOST = process.env.API_HOST;
const API_PORT = process.env.API_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;
const DB_NAME = process.env.DB_NAME;

if (API_HOST === undefined || API_HOST === '') {
  throw 'API_HOST environment variable not setted';
}

if (API_PORT === undefined || API_PORT === '') {
  throw 'API_PORT environment variable not setted';
}

if (DB_HOST === undefined || DB_HOST === '') {
  throw 'DB_HOST environment variable not setted';
}

if (DB_PORT === undefined || DB_PORT === '') {
  throw 'DB_PORT environment variable not setted';
}

if (DB_USER === undefined || DB_USER === '') {
  throw 'DB_USER environment variable not setted';
}

if (DB_PWD === undefined || DB_PWD === '') {
  throw 'DB_PWD environment variable not setted';
}

if (DB_NAME === undefined || DB_NAME === '') {
  throw 'DB_NAME environment variable not setted';
}

module.exports = {
  API_HOST: API_HOST,
  API_PORT: API_PORT,
  DB_HOST: DB_HOST,
  DB_PORT: DB_PORT,
  DB_USER: DB_USER,
  DB_PWD: DB_PWD,
  DB_NAME: DB_NAME,
};
