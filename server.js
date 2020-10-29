const express = require('express');
const app = express();
const hbs = require('hbs');

//llamado de helpers desde archivo
require('./hbs/helpers');

const port = process.env.PORT || 2000;

//retorna html estatico de carpeta public
app.use(express.static( __dirname + '/public'));

//registro de HBS handlebars para parciales
hbs.registerPartials( __dirname + '/views/partials');

//Express HBS engine
app.set('view engine', 'hbs');


 
app.get('/', (req, res) => {

    res.render('home', {
        //paso de variables del server a views
        anio: new Date().getFullYear(),
        nombre: 'ian quiroz from server'
    });
    //res.send('Hello mundo from Express');
});

app.get('/about', (req, res) => {

    res.render('about', {
        
    });
});

app.listen(port, () => {
    console.log(`Escuchando puerto ${ port }`)
});