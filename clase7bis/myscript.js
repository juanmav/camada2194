const database = require('./database');
const leftpad = require('leftpad');

console.log('Holaaaaaaaa MUNDO!!!!!');

let myUser = database.find( u => u.id == 1);

console.log(myUser.name);

console.log(leftpad('hola', 10));
