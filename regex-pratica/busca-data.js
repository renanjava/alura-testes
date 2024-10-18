const fs = require('fs')
const databaseCsv = 'database.csv'
const database = fs.readFileSync(databaseCsv, 'utf-8')

const regex = /[0-9]{2}[/.*]?[0-9]{2}[/.*]?[0-9]{4}$/gm
const matchRegex = database.match(regex)
console.log(matchRegex);
