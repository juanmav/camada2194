let usuarios = [{
    id: 1,
    name: 'pepe',
    edad: 24
}, {
    id: 2,
    name: 'laura',
    edad: 65
}, {
    id: 3,
    name: 'juan',
    edad: 10
},
    {
        id: 4,
        name: 'pedro',
        edad: 89
    }];


let sumEdades = usuarios.reduce(function(acc, u){
    return acc + u.edad;

}, 0)

console.log(sumEdades);
console.log(sumEdades / usuarios.length);
