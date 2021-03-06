function initMidiIn(midiW, deviceInputName) {
  return new midiW.Input(deviceInputName || midiW.getInputs()[1])
}
exports.initMidiIn = initMidiIn
