const router = require('express').Router()
const driversController = require('./drivers-controller.js')

module.exports = (app, midiW, { output, input }) => {
  router
    .route('/inputs')
    .get((req, res) => driversController.getInputs(req, res, midiW))

  router
    .route('/input')
    .get((req, res) => driversController.getActiveInput(req, res, input))

  router
    .route('/output')
    .get((req, res) => driversController.getActiveOutput(req, res, output))

  router
    .route('/outputs')
    .get((req, res) => driversController.getOutputs(req, res, midiW))

  app.use('/drivers', router)
}
