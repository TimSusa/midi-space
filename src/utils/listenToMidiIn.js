function listenToMidiIn(inputTmp) {
  inputTmp.on('noteon', function (msg) {
    console.log('note on msg ', msg)
  })
}
exports.listenToMidiIn = listenToMidiIn
