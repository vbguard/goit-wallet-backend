const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

class App {
  constructor() {
    this.app = express();
  }

  configure() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.use(cors());

    this.app.use(morgan('dev'));
  }

  start() {
    this.app.listen(3003, () => {
      console.log('Server is running. Use your API');
    });
  }
}

module.exports = App;
