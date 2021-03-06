function startServer(serverTmp, port) {
  // Start server
  return serverTmp.listen(port, function () {
    console.log('listening on *:', port)
  })
}
exports.startServer = startServer
