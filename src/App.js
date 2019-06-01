const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./api');

class App {
  constructor() {
    this.app = express();
  }

  configure() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.use(cors());

    this.app.use(morgan('dev'));

    this.app.use(api);
  }

  static connectMongo() {
    return mongoose.connect('mongodb://localhost:27017/wallet', { useNewUrlParser: true });
  }

  start() {
    this.configure();

    App.connectMongo().then(() => {
      this.app.listen(3003, () => {
        console.log('Server is running. Use your API');
      });
    });
  }
}

module.exports = App;
