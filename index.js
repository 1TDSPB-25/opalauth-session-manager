//Importando projeto HTPP para navegação do pacote node 
import http from 'node:http';
//importando o módulo fs para leitura de arquivos
import fs from 'node:fs';
import path from 'node:path';

//virtualizando o caminho do diretório atual
import { fileURLToPath } from 'url';

//obtendo o caminho do diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crie um setvidor HTTP
const server = http.createServer( async (req,res) =>{

    //Lendo o arquivo HTML - Define o caminho do arquivo HTML se for '/'
    const arquivoHTML = req.url === '/' ? "index.html" : req.url;
    const caminhoCompleto = path.join(__dirname, 'public', arquivoHTML);

    //Verificando a extensão do arquivo para o tipo de conteúdo
    const ext = path.extname(caminhoCompleto);
    let tipoConteudo = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon'
    }

    const contentType = tipoConteudo[ext] || 'text/plain';

    fs.readFile(caminhoCompleto, (err, conteudo) => {
        if(err){
            res.writeHead = 404;
            res.end('<h1>404 - Página não encontrada</h1>');
            return;
        }
        res.writeHead(200, {'Content-Type': contentType});
        res.end(conteudo);
    });
});


    //configurnando o cabeçalho da resposta
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

    //enviando a resposta para o cliente atraves da rota raiz
    if(req.url === '/' && req.method === 'GET'){
        res.statusCode
        res.write('<h1>Bem Vindo ao OpaAuth Session Manager</h1>');
        res.end;
    }else{
        res.statusCode = 404;
        res.end('<h1> 404 - Página não encontrada</h1>');
    }


server.listen(3000,()=>{

    console.log("Servidor Rodando em http:localhost:3000");
    console.log("Bem Vindo");

});

