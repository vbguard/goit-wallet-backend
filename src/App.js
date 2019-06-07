const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const swaggerDoc = require('src/swagger/swaggerDoc');

const api = require('src/api');
const validation = require('src/middlewares/validation');

const { MONGO_CONNECTION_URL, PORT } = require('./config');

class App {
  constructor() {
    this.app = express();
    this.port = PORT;
  }

  configure() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.use(cors());

    this.app.use(morgan('dev'));

    this.app.use(validation);
    this.app.use(api);
    swaggerDoc(this.app);
  }

  static connectMongo() {
    mongoose.set('useCreateIndex', true);
    return mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true });
  }

  start() {
    this.configure();

    App.connectMongo().then(() => {
      this.app.listen(this.port, () => {
        // eslint-disable-next-line no-console
        console.log(`Application is running on port ${this.port}`);
      });
    });
  }
}

module.exports = App;
