const { log } = require('../utils/logger.js')
function waitForStopServer(startedServer, processTmp) {
  // Graceful Shutdonw
  processTmp.once('SIGTERM', () => {
    log.info('SIGTERM signal received: closing HTTP server')
    startedServer.close(() => {
      log.info('HTTP server closed')
    })
  })
}
exports.waitForStopServer = waitForStopServer
