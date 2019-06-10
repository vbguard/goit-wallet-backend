const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Wallet API',
      version: '1.0.0',
      description: 'Express API for Wallet, view what routes pass',
    },
    basePath: 'https://wallet.goit.co.ua/api',
  },
  apis: ['src/api/routes.js'],
};

const specs = swaggerJsDoc(options);

module.exports = app => {
  app.use('/doc', swaggerUI.serve, swaggerUI.setup(specs));
};
