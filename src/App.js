const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const swaggerDoc = require('./swagger/swaggerDoc');
const api = require('./api/routes.js');
const validation = require('./middlewares/validation');

const { MONGO_CONNECTION_URL, PORT } = require('./config');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(morgan('dev'));
app.use(validation);

swaggerDoc(app);
app.use('/api', api);

mongoose.set('useCreateIndex', true);
mongoose.connect(MONGO_CONNECTION_URL, { useNewUrlParser: true });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Application is running on port ${PORT}`);
});
