const express = require('express')
const app = express()
const http = require('http')
const midiW = require('./midi/midi-wrapper')
const driversRoute = require('./routes/drivers.js')
const clientRoute = require('./routes/socket.io.js')
const { initMidiOut } = require('./midi/initMidiOut')
const { listenToClientSocket } = require('./midi/listenToClientSocket')
const { initMidiIn } = require('./midi/initMidiIn')
const { listenToMidiIn } = require('./midi/listenToMidiIn')
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

// Start server
server.listen(8080, function () {
  console.log('listening on *:8080')
})
