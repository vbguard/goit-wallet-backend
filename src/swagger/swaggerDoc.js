const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openApi: '3.0.0',
    info: {
      title: 'Wallet API',
      version: '1.0.0',
      description: 'Express API for Wallet, view what routes pass',
    },
    basePath: '/api',
  },
  apis: ['src/api/index.js'],
};

const specs = swaggerJsDoc(options);

module.exports = app => {
  app.use('/doc', swaggerUI.serve, swaggerUI.setup(specs));
};
