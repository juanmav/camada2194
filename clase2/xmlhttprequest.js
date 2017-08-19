// Desafio para hacer en la Web
// Pasar a promise.

function request(url, cb) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if(req.readyState == 4){
            cb(req.response, null);
        }
    };
    req.onerror = () => cb(null, new Error(req.statusText));
    req.open('GET', url);
    req.send();
}
request('https://jsonplaceholder.typicode.com/users/', (response) => console.log(response));