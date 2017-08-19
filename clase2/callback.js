let usuarios = [{
    id: 1,
    name: 'pepe'
}, {
    id: 2,
    name: 'laura'
}, {
    id: 3,
    name: 'juan'
}, {
    id: 4,
    name: 'pedro'
}];

function getUsers(query, cb) {
    setTimeout(function() {
        cb(usuarios);
    }, 1000)
}


getUsers({}, function(usuarios){
    console.log(usuarios);
});