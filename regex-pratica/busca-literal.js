const fs = require('fs')
const databaseCsv = './data/database.csv'
const database = fs.readFileSync(databaseCsv, 'utf-8')

const regex = /Anna/
const matchRegex = database.match(regex)
console.log(matchRegex);
