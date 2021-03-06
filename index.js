const Framework = require('./core/framework');

const server = Framework(5000);

server.get('/','Bienvenido a la pagina.');
server.get('/about','Esta pagina ha sido creada con NodeJS con un framework de prueba.');
server.get('/contact','Puedes contactarnos.');
