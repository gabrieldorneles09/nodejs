require('marko/node-require');

const express = require('express');
const markoExpress = require('marko/express');
const app = express();
const rotas = require('./app/rotas/rotas');

app.use(markoExpress());
rotas(app);

app.listen(3000, function(){
    console.log('Servidor rodando');
});