const express = require('express')
const app = express()
const http = require('http')
const midiW = require('./utils/midi-wrapper')
const driversRoute = require('./routes/drivers.js')
const clientRoute = require('./routes/socket.io.js')
const { initMidiOut } = require('./utils/initMidiOut')
const { listenToClientSocket } = require('./utils/listenToClientSocket')
const { initMidiIn } = require('./utils/initMidiIn')
const { listenToMidiIn } = require('./utils/listenToMidiIn')
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
