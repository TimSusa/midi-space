const path = require('path')
const express = require('express')
const app = express()
const socketio = require('socket.io')
const midiW = require('./midi-wrapper')
const deviceName = 'NodeJS MIDI out'

const verbose = true //process.argv.indexOf("--verbose")>-1;
let out = null
let input = null

if (process.platform === 'win32') {
  // find the loopmidi 'NodeJS MIDI out' virtual port
  var outputs = midiW.getOutputs()
  outputs.some((name) => {
    clearInterval
    if (name.toLowerCase().indexOf(deviceName.toLowerCase()) > -1) {
      out = new midiW.Output(name)
      return true
    }
    return false
  })
} else {
  console.log(deviceName)
  out = new midiW.Output(deviceName, true)
}

input = new midiW.Input(midiW.getInputs()[1])

input.on('noteon', function (msg) {
  // do something with ms

  console.log('note on msg ', msg)
})
const streamm = input.getReadStream()
let data = []
streamm.on('data', function (chunk) {
  data.push(new Buffer.from(chunk))
  console.log('STREEEEEAMM!!!!', data)
})

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/socket.io.js', function (req, res) {
  res.sendFile('socket.io.js', {
    root: path.join(
      __dirname,
      '..',
      'node_modules',
      'socket.io-client',
      'dist'
    ),
  })
})

app.get('/drivers/inputs', function (req, res) {
  res.send(midiW.getInputs())
})

app.get('/drivers/outputs', function (req, res) {
  res.send(midiW.getOutputs())
})

var http = require('http'),
  server = http.Server(app),
  io = socketio(server)

io.sockets.on('connection', function (socket) {
  console.log('User Connected')

  socket.emit('connected', 'you are now connected.')

  socket.on('noteon', function (data) {
    if (verbose) {
      console.log('emitting noteon:', data)
    }
    out.send('noteon', data)
  })

  socket.on('noteoff', function (data) {
    if (verbose) {
      console.log('emitting noteoff:', data)
    }
    out.send('noteoff', data)
  })
})

server.listen(8080, function () {
  console.log('listening on *:8080')
})
