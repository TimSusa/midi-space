function isDev() {
  return process.env.NODE_ENV !== 'production'
}
exports.isDev = isDev
