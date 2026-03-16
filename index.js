//Importando projeto HTPP para navegação do pacote node 
import http from 'node:http';
// Criae um setvidor HTTP
const server = http.createServer();

server.listen(3000,()=>{

    console.log("Servidor Rodando em http:localhost:3000");
    console.log("Bem Vindo");

});