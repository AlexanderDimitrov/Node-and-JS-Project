let cluster = require('cluster')
let http = require('http')
let cpus = require('os').cpus().length
// Cluster fork examples for using multiple servers at once
if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork()
  }

  cluster.on('close', (worker) => {
    cluster.fork()
  })
} else {
  http
  .createServer((req, res) => {
    res.writeHead(200)
    res.write('Hi')
    res.end()
  })
  .listen(1234)
}
