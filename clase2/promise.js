let getUsers = function(query, cb) {
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
    }]
    setTimeout(function() {
        cb(usuarios);
    }, 1000);
};

let getPosts = function(query, cb) {
    setTimeout(function() {
        cb([{
            userId: 1,
            text: 'Holaaaaaaaa'
        }]);
    }, 100);

};

getUsers({}, function(usuarios) {
    console.log(usuarios);
});

getPosts({}, function(posts) {
    console.log(posts);
});