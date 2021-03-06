function waitForStopServer(startedServerTmp, processTmp) {
  // Graceful Shutdonw
  processTmp.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server')
    startedServerTmp.close(() => {
      console.log('HTTP server closed')
    })
  })
}
exports.waitForStopServer = waitForStopServer
