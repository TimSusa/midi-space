const http = require('http')
const { initMidiOut } = require('../midi/initMidiOut')
const { listenToClientSocket } = require('../midi/listenToClientSocket')
const { initMidiIn } = require('../midi/initMidiIn')
const { listenToMidiIn } = require('../midi/listenToMidiIn')
const { startServer } = require('./startServer')
const { waitForStopServer } = require('./waitForStopServer')
const deviceName = 'NodeJS MIDI out'

function init(appTmp, midiWTmp) {
  let input = initMidiIn(midiWTmp, null)
  listenToMidiIn(input)

  let output = initMidiOut(midiWTmp, deviceName)

  const server = http.Server(appTmp)
  listenToClientSocket(server, output)

  const startedServer = startServer(server, process.env.PORT || 8080)
  waitForStopServer(startedServer, process)
}

module.exports = init
