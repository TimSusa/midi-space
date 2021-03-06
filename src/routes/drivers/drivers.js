const router = require('express').Router()
const driversController = require('./drivers-controller.js')

module.exports = (app, midiW) => {
  router
    .route('/inputs')
    .get((req, res) => driversController.getInputs(req, res, midiW))
  router
    .route('/outputs')
    .get((req, res) => driversController.getOutputs(req, res, midiW))
  app.use('/drivers', router)
}
