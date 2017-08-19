let usuarios = [{
    id: 1,
    name: 'pepe'
}, {
    id: 2,
    name: 'laura'
}, {
    id: 3,
    name: 'juan'
},    {
    id: 4,
    name: 'pedro'
}
]

let user = usuarios.find(function(u){
    return u.id == 3;
})


let filtrados = usuarios.filter(function(u){
    return u.id >= 3;
});


console.log(filtrados);
console.log(usuarios);
