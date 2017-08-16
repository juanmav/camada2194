let usuarios = [{
    id: 1,
    name: 'pepe'
}, {
    id: 2,
    name: 'laura'
}, {
    id: 3,
    name: 'juan'
},
    {
        id: 4,
        name: 'pedro'
    }]

let actualizados = usuarios.map(function(u){
    let user = {};
    user.name = u.name.toUpperCase();
    user.id = u.id;
    return user;
});

console.log(usuarios);
console.log(actualizados);
