const http = require('http')
const { listenToClientSocket } = require('../midi/listenToClientSocket')
const { startServer } = require('./startServer')
const { waitForStopServer } = require('./waitForStopServer')
const { log } = require('../logger.js')

function init(app, { output }) {
  const server = http.Server(app)
  listenToClientSocket(server, output)

  const startedServer = startServer(server, process.env.PORT || 8080)
  log.info('Server Started')
  waitForStopServer(startedServer, process)
}

module.exports = init
