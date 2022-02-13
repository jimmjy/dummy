// Modules
const { john, secret, peter } = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-exports');

console.log(data);

sayHi(john);
sayHi(secret);
sayHi(peter);
