const http = require('http')
const SSE = require('sse')
const { listenToClientSocket } = require('../midi/listen-to-client-socket.js')
const { startServer } = require('./start-server')
const { waitForStopServer } = require('./wait-for-stop-server.js')
const { log } = require('../utils/logger.js')

function initServer(app, { output, input }) {
  const server = http.Server(app)

  const sse = new SSE(server)
  sse.on('connection', function (client) {
    input.on('message', function (msg) {
      log.debug('Incoming MIDI Message: ', JSON.stringify(msg))
      client.send(JSON.stringify({ in: input.name, ...msg }))
    })
  })

  listenToClientSocket(server, output)
  const startedServer = startServer(server, process.env.PORT || 8080)
  log.info('Server Started')
  waitForStopServer(startedServer, process)
}

module.exports = initServer
