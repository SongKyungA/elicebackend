const fs = require('fs')
console.log('프로그램 시작...')
let data = fs.readFileSync('./news.txt')
console.log(data.toString())