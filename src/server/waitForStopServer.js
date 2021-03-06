const { log } = require('../logger.js')
function waitForStopServer(startedServer, processTmp) {
  // Graceful Shutdonw
  processTmp.on('SIGTERM', () => {
    log.info('SIGTERM signal received: closing HTTP server')
    startedServer.close(() => {
      log.info('HTTP server closed')
    })
  })
}
exports.waitForStopServer = waitForStopServer
