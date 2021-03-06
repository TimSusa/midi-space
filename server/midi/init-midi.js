const { initMidiOut } = require('./init-midi-out.js')
const { initMidiIn } = require('./init-midi-in.js')
const deviceName = 'NodeJS MIDI out'

function initMidi(midiWTmp) {
  let input = initMidiIn(midiWTmp, null)

  let output = initMidiOut(midiWTmp, deviceName)
  return { output, input }
}
exports.initMidi = initMidi
