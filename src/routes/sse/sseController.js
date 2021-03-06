function randomNumberControllerStream(req, res) {
  let interval = setInterval(function () {
    const data = {
      value: Math.random(),
    }
    console.log(data)
    res.sendEventStreamData(data)
  }, 1000)

  // close
  res.on('close', () => {
    clearInterval(interval)
    res.end()
  })
}
exports.randomNumberControllerStream = randomNumberControllerStream
