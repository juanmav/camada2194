let p = new Promise(function(resolve, reject) {
    resolve('Hola')
});

//console.log(p);
//p.then(result => console.log(result));

let getUserProm = function(query) {
    return new Promise(function(resolve, reject) {
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
        setTimeout(function() {
            resolve(usuarios);
        }, 1000);
    });
};

let getPosts = function(query, cb) {
    setTimeout(function() {
        cb([{
            userId: 1,
            text: 'Holaaaaaaaa'
        }]);
    }, 100);
};

let getPostProm = function(query){
    return new Promise(function(resolve, reject){
        getPosts(query,resolve)
    })
};

getUserProm({})
    .then(usuarios => {
        return usuarios[0];
    })
    .then(unUsuaurio => {
        let id = unUsuaurio.id;
        console.log(unUsuaurio);
        return getPostProm({ userId: id})
    })
    .then(posts => {
        console.log(posts);
    });

//getPostProm({}).then( posts => console.log(posts));