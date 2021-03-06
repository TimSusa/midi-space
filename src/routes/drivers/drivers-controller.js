module.exports = {
  getInputs: (req, res, midiW) => {
    const ins = midiW.getInputs()
    console.log('get inputs ', ins, req, res)
    res.send(ins)
  },
  getOutputs: (req, res, midiW) => {
    const outs = midiW.getOutputs()
    console.log('get inputs ', outs, req, res)
    res.send(outs)
  },
  getActiveInput: (req, res, input) => {
    console.log('get active input ', input.name)
    res.send(input.name)
  },
  getActiveOutput: (req, res, output) => {
    console.log('get active output ', output.name)
    res.send(output.name)
  },
}
