const path = require('path')

// function socketIoController(req, res) {
//   res.sendFile('socket.io.js', {
//     root: path.join(__dirname, 'node_modules', 'socket.io-client', 'dist'),
//   })
// }

module.exports = {
  socketIoController: (req, res) => {
    res.sendFile('socket.io.js', {
      root: path.join(
        __dirname,
        '..',
        '..',
        '..',
        'node_modules',
        'socket.io-client',
        'dist'
      ),
    })
  },
}
