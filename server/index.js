const express = require('express')
const app = express()
const midi = require('./midi/midi-wrapper')
const routeSocket = require('./routes/socket/socket.io.js')
const routeDrivers = require('./routes/drivers/drivers.js')
const routeServerSentEvents = require('./routes/sse/sse.js')
const { initMidi } = require('./midi/init-midi.js')
const initServer = require('./init/init-server.js')
const logMw = require('./middleware/log-middleware')

app.use(logMw)
logMw.logger.info('Starting Service ....')
const { output, input } = initMidi(midi)
routeSocket(app)
routeDrivers(app, midi, { output, input })
routeServerSentEvents(app, { output, input })
initServer(app, { output })