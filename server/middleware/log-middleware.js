const basicPino = require('pino')
const { isDev } = require('../utils/is-dev')
const basicPinoLogger = basicPino({
  prettyPrint: isDev(),
})
const expressPino = require('express-pino-logger')({
  logger: basicPinoLogger,
})

module.exports = expressPino
