let fs = require('fs')
// File System module examples

const dirPath = './Test'
// Node Rules for Programming(Asynchronized)
fs.exists(dirPath, (exists) => {
  if (!exists) {
    fs.mkdir(dirPath, (err) => {
      if (err) console.log(err)

      fs.writeFileSync('./Test/ThirdFile.txt', 'Hi From Node')
    })
  } else {
    fs.writeFileSync('./Test/ThirdFile.txt', 'Third Copy Nature')
  }
})
// Synchronisez Programming

let existsDirectory = fs.existsSync(dirPath)
if (!existsDirectory) {
  fs.mkdirSync(dirPath)
}

if (!fs.existsSync('./Test/MyFile.txt')) {
  fs.writeFileSync('./Test/MyFile.txt', 'Second File Hi')
}

