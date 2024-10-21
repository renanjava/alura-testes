const fs = require('fs')
const htmlContent = './data/html.txt'
const database = fs.readFileSync(htmlContent, 'utf-8')

const regex = /<(h[1-2])[^>]*>(.*)<\/(h[1-2])>/g
const matchRegex = database.match(regex)
console.log(matchRegex);
