const http = require('http')
const { listenToClientSocket } = require('../midi/listen-to-client-socket.js')
const { startServer } = require('./start-server')
const { waitForStopServer } = require('./wait-for-stop-server.js')
const { log } = require('../utils/logger.js')

function initServer(app, { output }) {
  const server = http.Server(app)
  listenToClientSocket(server, output)
  const startedServer = startServer(server, process.env.PORT || 8080)
  log.info('Server Started')
  waitForStopServer(startedServer, process)
}

module.exports = initServer
