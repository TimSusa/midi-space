// create helper middleware so we can reuse server-sent events
function sseMiddleware(req, res, next) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')

  // only if you want anyone to access this endpoint
  res.setHeader('Access-Control-Allow-Origin', '*')

  res.flushHeaders()

  // we are attaching sendEventStreamData to res, so we can use it later
  Object.assign(res, {
    sendEventStreamData: (data) => {
      const sseFormattedResponse = `data: ${JSON.stringify(data)}\n\n`
      res.write(sseFormattedResponse)
    },
  })

  next()
}
exports.sseMiddleware = sseMiddleware
