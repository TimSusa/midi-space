const { log } = require('../utils/logger.js')

function startServer(server, port) {

  return server.listen(port, function () {
    log.info(`listening on *: ${port}`)

  })
}
exports.startServer = startServer
