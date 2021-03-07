const { init } = require('./init/init.js')
process.setMaxListeners(0)

init(process.argv)
