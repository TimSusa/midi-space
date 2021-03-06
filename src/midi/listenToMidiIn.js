const { log } = require('../logger.js')

function listenToMidiIn(input) {
  input.on('noteon', function (msg) {
    log.info('note on msg ', msg)
  })
}
exports.listenToMidiIn = listenToMidiIn
