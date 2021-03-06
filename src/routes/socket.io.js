const path = require('path')
const { socketIoController } = require('./socket.io.controller.js')

const router = require('express').Router()

module.exports = (app, express) => {
  router.route('/socket.io.js').get(socketIoController)
  app.use(express.static(path.join(__dirname, '..', '..', 'public')), router)
}
