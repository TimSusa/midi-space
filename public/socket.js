function bootstrap() {
  drawKeyboard()

  document.addEventListener('keydown', (evt) => {
    checkSpecialDown(evt)
    keydown(evt)
  })

  document.addEventListener('keyup', (evt) => {
    checkSpecialDown(evt)
    keyup(evt)
  })

  setupArpeggiator()

  const sourceInput = new window.EventSource('/sse/input')

  sourceInput.onmessage = function (event) {
    console.log(JSON.parse(event.data))
  }

  // const sourceRandom = new window.EventSource('/sse/random')

  // sourceRandom.onmessage = function (event) {
  //   console.log(JSON.parse(event.data))
  // }
}

if (typeof io !== 'undefined') {
  var socket = io()
  socket.on('connected', function (msg) {
    console.log(msg)
    bootstrap()
  })
} else {
  bootstrap()
}
