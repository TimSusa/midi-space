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


}

if (typeof window.io !== 'undefined') {
  var socket = window.io()
  socket.on('connected', function (msg) {
    console.log(msg)
    bootstrap()
  })
} else {
  bootstrap()
}
