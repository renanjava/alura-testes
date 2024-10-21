const fs = require('fs')
const databaseCsv = './data/database.csv'
const database = fs.readFileSync(databaseCsv, 'utf-8')

const regex = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g
const matchRegex = database.match(regex)
console.log(matchRegex);
