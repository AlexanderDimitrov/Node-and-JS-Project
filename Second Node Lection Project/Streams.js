let fs = require('fs')
let http = require('http')
let readStream = fs.createReadStream('Streams.js')
let writeStream = fs.createWriteStream('index.copy.js')

readStream.on('data', (data) => { writeStream.write(data) })
readStream.on('end', () => console.log('ready'))


