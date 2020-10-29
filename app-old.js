
//creacion de servidor con http
//usar Express
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Ian',
        edad: 11,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    //res.write('hola mundod desde Node JS');
    res.end();
})
.listen(8080);

console.log('escuchando puerto 8080');
