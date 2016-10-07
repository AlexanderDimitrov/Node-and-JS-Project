let http = require('http')
let port = 9532
let favicon = require('./handlers/favicon')
let homePage = require('./handlers/home-page')
let staticFiles = require('./handlers/static-files')

http
  .createServer((req, res) => {
    var handlers = [
      favicon,
      homePage,
      staticFiles
    ]

    for (let handler of handlers) {
      var next = handler(req, res)
      if (!next) {
        break
      }
    }
  })
.listen(port)
console.log('Server listenin on Port:' + port)
