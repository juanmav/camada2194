const tweets = [
    {
        _id: "1",
        message: "Hola es mi mensaje",
        author: {
            _id: "11",
            name: "Pepito",
            lastname: "Conejo"
        },
        comments: [{
            message: "Hola es mi comentario",
            author: {
                _id: "11",
                name: "Pedro",
                lastname: "Roberson"
            }
        }]
    },
    {
        _id: "2",
        message: "Hola es mi mensaje 2",
        author: {
            _id: "22",
            name: "Jose",
            lastname: "Campanella"
        },
        comments: []
    }
];
export default tweets;