//teste

// Importando o objeto http para navegação do pacote node
import http from 'node:http';

// Criar um servidor HTTP com o objeto http.

const server = http.createServer();

server.listen(3000, ()=>{
    console.log("Servidor Rodando em http://localhost:3000");
    console.log("Bem vindo!");
});