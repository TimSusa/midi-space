// use pino-pretty and express-pino-logger together
const basicPino = require('pino')
const basicPinoLogger = basicPino({
  prettyPrint: !process.env.NODE_ENV.includes('prod'),
})
const expressPino = require('express-pino-logger')({
  logger: basicPinoLogger,
})

module.exports = expressPino
