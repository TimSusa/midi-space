const socketio = require('socket.io')
const { log } = require('../utils/logger.js')

function listenToClientSocket(serverTmp, outputTmp) {
  const io = socketio(serverTmp)

  io.sockets.on('connection', function (socket) {
    log.info('User Connected')

    socket.emit('connected', 'you are now connected.')

    socket.on('noteon', function (data) {
      log.info('emitting noteon:', data)
      outputTmp.send('noteon', data)
    })

    socket.on('noteoff', function (data) {
      log.info('emitting noteoff:', data)
      outputTmp.send('noteoff', data)
    })
  })
}

exports.listenToClientSocket = listenToClientSocket
