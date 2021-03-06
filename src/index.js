const express = require('express')
const app = express()
const midiW = require('./midi/midi-wrapper')
const driversRoute = require('./routes/drivers.js')
const clientRoute = require('./routes/socket.io.js')
const init = require('./server/init.js')

driversRoute(app, midiW)
clientRoute(app, express)

init(app, midiW)
