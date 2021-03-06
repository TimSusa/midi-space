//const { randomNumberControllerStream } = require('./sseController')
const { sseMiddleware } = require('../../middleware/sseMiddleware.js')

const router = require('express').Router()

module.exports = (app, { input }) => {
  //router.route('/random').get(randomNumberControllerStream)
  router.route('/input').get(function (req, res) {
    input.on('message', (data) => {
      res.sendEventStreamData(Object.assign({}, data, { name: input.name }))
      res.on('close', () => {
        res.end()
      })
    })
  })
  app.use('/sse', sseMiddleware, router)
}
