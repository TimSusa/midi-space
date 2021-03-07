const express = require('express')
const app = express()
const midi = require('../midi/midi-wrapper')
const routeSocket = require('../routes/socket/socket.io.js')
const routeDrivers = require('../routes/drivers/drivers.js')
//const routeServerSentEvents = require('../routes/sse/sse.js')
const routeManager = require('../routes/home/home.js')
const { initMidi } = require('../midi/init-midi.js')
const initServer = require('./init-server.js')
const logMw = require('../middleware/log-middleware')

function init(args) {
  if (args.some((item) => item === '--verbose')) {
    app.use(logMw)
    logMw.logger.info('Verbose Logging enabled...')
  }
  const { output, input } = initMidi(midi)
  routeSocket(app)
  routeDrivers(app, midi, { output, input })
  //routeServerSentEvents(app, { output, input })
  routeManager(app)
  initServer(app, { output, input })
}

exports.init = init
