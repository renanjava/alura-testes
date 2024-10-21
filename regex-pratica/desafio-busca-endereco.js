const fs = require('fs')
const databaseCsv = './data/desafio.csv'
const database = fs.readFileSync(databaseCsv, 'utf-8')

const regex = /([^,\n]*\,\s\d+[a-z[A-Z]?\,\s\CEP\s\d{5}\-\d{3})/g
const matchRegex = database.match(regex)
console.log(matchRegex);
