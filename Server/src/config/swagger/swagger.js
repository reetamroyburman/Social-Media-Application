// const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load("./src/config/api.yaml")

module.exports = {
  swaggerJsDocs
}





























// const swaggerJsdoc = YAML.load("./src/config/api.yaml")

// module.exports = (app) => {
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc))
// }

// Swagger definition
// const swaggerDefinition = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Server API  dsfefeff',
//     version: '1.0.0',
//     description: 'Description of your API',
//   },
//   servers: [
//     {
//       url: 'http://localhost:4000',
//       description: 'Development server',
//     },
//   ],
//   // apis: ['../src/routers/userRouter.js'],
//   // src\routers\userRouter.js
// };

// Options for the swagger docs
// const options = {
//   swaggerDefinition,
//   apis: ['../src/routers/userRouter.js'],

   // Path to the API docs
  //  apis: ['../routers/*.js'],
// };

// Initialize swagger-jsdoc
// const swaggerSpec = swaggerJsdoc(options);

// module.exports = {
//   swaggerUi,
//   swaggerSpec,
// };

// module.exports = (app) => {
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
// }

