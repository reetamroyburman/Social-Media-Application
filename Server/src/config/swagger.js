const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json'); // Load the generated JSON file

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = swaggerDocs;

