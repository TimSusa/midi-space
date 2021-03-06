const express = require('express')
const app = express()
const socketio = require('socket.io')
const http = require('http')
const midiW = require('./midi-wrapper')
const driversRoute = require('./routes/drivers.js')
const clientRoute = require('./routes/socket.io.js')
const deviceName = 'NodeJS MIDI out'

// Routes
driversRoute(app, midiW)
clientRoute(app, express)

// MIDI In
let input = initMidiIn(midiW, null)
listenToMidiIn(input)

// MIDI Out
let output = initMidiOut(midiW, deviceName)

// Socket Input from client
const server = http.Server(app)
listenToClientSocket(server, output)

server.listen(8080, function () {
  console.log('listening on *:8080')
})

function listenToMidiIn(inputTmp) {
  inputTmp.on('noteon', function (msg) {
    console.log('note on msg ', msg)
  })
}

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

function initMidiOut(midiWTmp, deviceNameTmp = 'NodeJS MIDI out') {
  let out = null
  if (process.platform === 'win32') {
    var outputs = midiWTmp.getOutputs()
    outputs.some((name) => {
      clearInterval
      if (name.toLowerCase().indexOf(deviceNameTmp.toLowerCase()) > -1) {
        out = new midiWTmp.Output(name)
        return true
      }
      return false
    })
  } else {
    out = new midiWTmp.Output(deviceNameTmp, true)
  }
  return out
}

function initMidiIn(midiW, deviceInputName) {
  return new midiW.Input(deviceInputName || midiW.getInputs()[1])
}
