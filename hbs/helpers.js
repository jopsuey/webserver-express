const hbs = require('hbs');

//Helpers hbs para fecha en footer
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (text) => {
    let palabras = text.split(' ');
    
    palabras.forEach((word, idx) => {
        palabras[idx]    = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});
