let fs = require('fs')
let http = require('http')
// Module for getting information from current data
// let query = require('querystring')
let multiparty = require('multiparty')

http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      fs.readFile('multipartyIndex.html', (err, file) => {
        if (err) console.log(err)

        res.writeHead(200)
        res.write(file)
        res.end()
      })
    } else if (req.method === 'POST') {
     /* let body = ''
      req.on('data', (data) => { body += data })
      req.on('end', () => {
        let result = query.parse(body)// Querry Module Testing Point

        console.log(result)
        console.log(result.name)

        res.writeHead(200)
        res.write(body)
        res.end()
      })*/
      // MultiParty Method for reading
      let form = new multiparty.Form()

      form.on('part', (part) => {
        if (part.filename) { // file
          let body = ''

          part.on('data', (data) => { data += body })
          part.on('end', () => {
            fs.writeFile(part.filename, body, (err) => {
              if (err) throw err
              res.writeHead(200)
              res.write('Uploaded')
              res.end()
            })
          })
        } else { // text
          part.resume()
        }
      })
      form.parse(req)
    }
  }).listen(1234)
