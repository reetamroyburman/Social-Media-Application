const swaggerAutogen = require('swagger-autogen')();

// Define the Swagger documentation output file and your API routes
const doc = {
  info: {
    title: 'Express API',
    description: 'API documentation for Express application',
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Local server',
    },
  ],
};

// Specify the output file and the routes to include
const outputFile = '../../src/config/swagger-output.json';
const endpointsFiles = ['../routers/**/*.js'];

// Generate the Swagger documentation
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('../index.js'); // Adjust the path to your main server file
});
