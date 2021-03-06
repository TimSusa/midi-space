function waitForStopServer(startedServer, processTmp) {
  // Graceful Shutdonw
  processTmp.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server')
    startedServer.close(() => {
      console.log('HTTP server closed')
    })
  })
}
exports.waitForStopServer = waitForStopServer
