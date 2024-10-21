const fs = require('fs')
const databaseCsv = 'database.csv'
const database = fs.readFileSync(databaseCsv, 'utf-8')

const regex = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm
const matchRegex = database.match(regex)
console.log(matchRegex);
