const { log } = require('../../logger.js')

module.exports = {
  getInputs: (req, res, midiW) => {
    const ins = midiW.getInputs()
    log.info('get inputs ', ins, req, res)
    res.send(ins)
  },
  getOutputs: (req, res, midiW) => {
    const outs = midiW.getOutputs()
    log.info('get inputs ', outs, req, res)
    res.send(outs)
  },
  getActiveInput: (req, res, input) => {
    log.info('get active input ', input.name)
    res.send(input.name)
  },
  getActiveOutput: (req, res, output) => {
    log.info('get active output ', output.name)
    res.send(output.name)
  },
}
