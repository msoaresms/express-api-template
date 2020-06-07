const path = require('path');
const mongoose = require('mongoose');
const api_config = require(path.resolve(__dirname, 'api'));

const mongoDB = `mongodb://${api_config.DB_USER}:${api_config.DB_PWD}@${api_config.DB_HOST}:${api_config.DB_PORT}/${api_config.DB_NAME}`;

const connectWithRetry = () => {
  return mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection.on('connected', () => {
  console.log('MongoDB: Connected to ', api_config.DB_NAME);
});

mongoose.connection.on('error', error => {
  console.log('MongoDB: Connection Error - ', error);
  setTimeout(connectWithRetry, 5000);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB: Disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    throw 'Database connection closed due to server process end';
  });
});

module.exports = connectWithRetry();
