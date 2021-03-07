const path = require('path')

const express = require('express')
const router = express.Router()

module.exports = (app) => {
  app.use(
    '/',
    express.static(path.join(__dirname, '..', '..', '..', 'build')),
    router
  )
}
