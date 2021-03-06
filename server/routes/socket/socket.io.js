const path = require('path')

const { socketIoController } = require('./socket.io.controller.js')
const express = require('express')
const router = express.Router()

module.exports = (app) => {
  router.route('/socket.io.js').get(socketIoController)
  app.use(
    express.static(path.join(__dirname, '..', '..', '..', 'public')),
    router
  )
}
