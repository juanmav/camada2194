let string = 'linea numero 1 con muchos datos \n' +
    'linea numero 2 con muchos caracteres';

console.log(string);

let template =  `linea numero 1 con muchos datos linea numero 2 con muchos caracteres asdasdasd
asdasdasdsad
asdasdasdasdsad
asdsadadsadsasdsdad
asdsadsdasad`

//console.log(template);

let user = {
    name : 'Coder',
    lastname: 'House'
}

let template2= `Hola como estas ${ user.name }, tu apellido es ${ user.lastname }`

console.log(template2);
