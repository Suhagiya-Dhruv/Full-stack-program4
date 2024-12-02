// file System

const fs = require('fs'); // library FS

// read file and return its content

// const data = fs.readFileSync('./hello.txt', 'utf-8') // 2 Args 5sec
// console.log(data)

// const data = fs.readFileSync('./hello.txt', 'utf-8') // 2 Args 2sec
// console.log(data)

// fs.readFile('./hello1.txt', 'utf-8', (err, data) => {
//     console.log(err, data)
// }) // 3 Args

// write file

// const data = fs.writeFileSync('./hello.txt', "Data")
// fs.writeFile('./hello1.txt', "Data 123", () => {

// })

// append file

// const data = fs.appendFileSync('./hello2.txt', "   123456")

// delete file

// fs.unlinkSync('./hello2.txt')
// fs.unlink('./hello1.txt', (err, data) => {
//     console.log(err, data)
// })

// console.log(__filename)
// console.log(__dirname)