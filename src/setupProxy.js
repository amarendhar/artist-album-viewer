const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/search/artist/',
    createProxyMiddleware({
      target: 'https://api.deezer.com',
      changeOrigin: true,
    })
  )

  app.use(
    '/search/album/',
    createProxyMiddleware({
      target: 'https://api.deezer.com',
      changeOrigin: true,
    })
  )

  app.use(
    '/album/',
    createProxyMiddleware({
      target: 'https://api.deezer.com',
      changeOrigin: true,
    })
  )
}
