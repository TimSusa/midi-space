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
}
