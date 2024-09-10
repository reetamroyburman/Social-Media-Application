// const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load("./src/config/api.yaml")

module.exports = {
  swaggerJsDocs
}
