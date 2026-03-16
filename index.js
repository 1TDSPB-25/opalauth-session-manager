//Emplemetando o objeto http para navegação do pacote node

import http from 'node:http'

//criar um servidor http

const server = http.createServer();

server.listen(3000, ()  => {
    console.log('Servidor rodando em http em http://localhost:3000')
    console.log("bem vindo")
});