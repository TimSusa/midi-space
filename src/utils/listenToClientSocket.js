const socketio = require('socket.io')

function listenToClientSocket(serverTmp, outputTmp) {
  const io = socketio(serverTmp)

  io.sockets.on('connection', function (socket) {
    console.log('User Connected')

    socket.emit('connected', 'you are now connected.')

    socket.on('noteon', function (data) {
      console.log('emitting noteon:', data)
      outputTmp.send('noteon', data)
    })

    socket.on('noteoff', function (data) {
      console.log('emitting noteoff:', data)
      outputTmp.send('noteoff', data)
    })
  })
}

exports.listenToClientSocket = listenToClientSocket
