const regex = /^(?!(.)\1\1)[A-Za-zA-ÿ -]{3,30}$/i.test('aaaa')
console.log(regex);
