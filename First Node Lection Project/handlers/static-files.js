let url = require('url')
let fs = require('fs')

function getContentType (url) {
  let contentType = 'text/plain'
  if (url.endsWith('.css')) {
    contentType = 'text/css'
  } else if (url.endsWith('.js')) {
    contentType = 'application/javascript'
  }

  return contentType
}
module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathName

  fs.readFile('.' + req.pathName, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('404 : Not Found')
      res.end()
      return true
    }

    let contentType = getContentType(req.pathName)

    res.writeHead(200, {
      'Content-Type': contentType
    })
    res.write(data)
    res.end()
  })
}

