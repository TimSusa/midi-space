const { initMidiOut } = require('./initMidiOut')
const { initMidiIn } = require('./initMidiIn')
//const { listenToMidiIn } = require('./listenToMidiIn')
const deviceName = 'NodeJS MIDI out'

function initMidi(midiWTmp) {
  let input = initMidiIn(midiWTmp, null)
  //listenToMidiIn(input)

  let output = initMidiOut(midiWTmp, deviceName)
  return { output, input }
}
exports.initMidi = initMidi
