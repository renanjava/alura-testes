const fs = require('fs')
const databaseCsv = 'database.csv'
const database = fs.readFileSync(databaseCsv, 'utf-8')

const regex = /\(\d{2}\)\s\d{5}\-\d{4}/g
const matchRegex = database.match(regex)
console.log(matchRegex);
