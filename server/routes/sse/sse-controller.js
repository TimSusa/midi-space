function randomNumberControllerStream(req, res) {
  let interval = setInterval(function () {
    const data = {
      value: Math.random(),
    }
    res.sendEventStreamData(data)
  }, 1000)

  // close
  res.on('close', () => {
    clearInterval(interval)
    res.log.debug('close random numbers')
    res.end()
  })
}
exports.randomNumberControllerStream = randomNumberControllerStream
