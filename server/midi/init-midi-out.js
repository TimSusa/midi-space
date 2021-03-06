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

exports.initMidiOut = initMidiOut
