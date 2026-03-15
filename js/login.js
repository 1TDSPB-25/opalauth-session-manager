
//#ISSUE - 1
let nomeUsuario = "opalAuth";
let tentativasLogin = 3;

console.log(`Bem-vindo, ${nomeUsuario}! Você tem ${tentativasLogin} tentativas de login restantes.`);

const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

// Capturando os dados do campo SENHA:

function validaCampo() {
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);

    //Verificando se a senha é PAR:

    //Simulação de HASH:
    const valorHash = valorCampo ** 2;
    console.log("Senha modificada:", valorHash);
}

// #ISSUE - 2
// #ISSUE - 3

// Criação da Base (Pág. 21, 32):
// Criar um Array de Objetos chamado listaUsuarios contendo exatamente 3 usuários:
const listaUsuarios = [
    {
        usuario: "admin",
        senhaOriginal: 2026,
        perfil: "Comandante"
    },
    {
        usuario: "gestor",
        senhaOriginal: 1010,
        perfil: "Supervisor"
    },
    {
        usuario: "aluno",
        senhaOriginal: 5050,
        perfil: "Operador"
    }
];

//  Página de Destino:
//  Criar o arquivo dashboard.html com o código fornecido pelo professor.
//  Teste de Tipo (Pág. 22):
// No console, use console.log(typeof listaUsuarios) e console.table(listaUsuarios) para validar a estrutura.
console.log(typeof listaUsuarios);
console.table(listaUsuarios);

//Estrurura de Repetição (Pág. 22):
// Criar um loop for para exibir no console o nome de cada usuário presente na listaUsuarios.

// for (let i = 0; i < listaUsuarios.length; i++) {
//     console.log("Usuário:", listaUsuarios[i].usuario);
// }

//Exemplificação de For OF:
// for (const usuario of listaUsuarios) {
//     console.log("Usuário:", usuario.usuario);
// }

//Exemplificação de For IN:
// for (const indice in listaUsuarios) {
//     console.log("Usuário:", listaUsuarios[indice].usuario);
// }

//Exemplificação de For Each:
// listaUsuarios.forEach()

// (usuario) => {
//     console.log("Usuário:", usuario.usuario);
// }

//array.funcao((item, index, arrayCompleto) => { ... });

//Higher-Order Functions

//Exemplificação de listagem e função de arrays:
listaUsuarios.forEach((usuario, indice, arrayCompleto) => {
    //  console.log("Usuário:", usuario.usuario);
    console.log(`Índice: ${indice}, Usuário: ${usuario.usuario}`);
});

// // //Criando uma lista de FRUTAS:
// // const listaFrutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];

// // //imprimindo a lista de frutas usando forEach:
// // listaFrutas.forEach((fruta, indice) => {
// //     console.log(`Índice: ${indice}, Fruta: ${fruta}`);
// // });

// // //Exemplificar a função push para adicionar um novo item à lista de frutas:
// // listaFrutas.push("Manga");
// // console.log("Lista de Frutas Atualizada:", listaFrutas);

// // //Exemplificar a função pop para remover o último item da lista de frutas:
// // const frutaRemovida = listaFrutas.pop();
// // console.log("Fruta Removida:", frutaRemovida);
// // console.log("Lista de Frutas Atualizada:", listaFrutas);

// // //Exemplificar a função shift para remover o primeiro item da lista de frutas:
// // const primeiraFrutaRemovida = listaFrutas.shift();
// // console.log("Primeira Fruta Removida:", primeiraFrutaRemovida);
// // console.log("Lista de Frutas Atualizada:", listaFrutas);

// // //Exemplificar a função unshift para adicionar um novo item no início da lista de frutas:
// // listaFrutas.unshift("Melancia");
// // console.log("Lista de Frutas Atualizada:", listaFrutas);

// // //Exemplificando os métodos SORT( ), REVERSE() e SPLICE( ):
// // // SORT( ) - Ordena os elementos da lista em ordem alfabética:
// // listaFrutas.sort();
// // console.log("Lista de Frutas Ordenada:", listaFrutas);

// // // REVERSE() - Inverte a ordem dos elementos da lista:
// // listaFrutas.reverse();
// // console.log("Lista de Frutas Invertida:", listaFrutas);


// // // SPLICE( ) - Remove ou substitui elementos da lista:
// // // Exemplo: Remover 2 elementos a partir do índice 1 e adicionar "Pera" no lugar:
// // listaFrutas.splice(1, 2, "Pera");
// // console.log("Lista de Frutas Atualizada:", listaFrutas);


// //Criando uma lista de FRUTAS:
// const listaFrutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi", "Manga", "Melancia"];
// console.log("Lista de Frutas:", listaFrutas);


// //Exemplo de filtragem de arrays usando a função filter para criar uma nova lista de frutas que começam com a letra "M":
// const frutasComM = listaFrutas.filter(fruta => fruta.startsWith("M"));
// console.log("Frutas que começam com a letra 'M':", frutasComM);

// const carrinhoCompras = [
//     { produto: "Notebook", preco: 2500 },
//     { produto: "Smartphone", preco: 1500 },
//     { produto: "Fone de Ouvido", preco: 300 }
// ];

// const totalCompra = carrinhoCompras.reduce((total, item) => total + item.preco, 0);
// console.log("Total da Compra:", totalCompra);


// //Exemplo de uso do find para localizar um usuário específico na listaUsuarios com base no nome de usuário:
// const usuarioEncontrado = listaUsuarios.find(usuario => usuario.usuario === "gestor");
// console.log("Usuário Encontrado:", usuarioEncontrado);

// //Exemplo de filtragem de arrays usando a função filter para criar uma nova lista de frutas que começam com a letra "M":
// const frutasComM = listaFrutas.filter(fruta => fruta.includes("n"));
// console.log("Frutas incluem a letra 'n':", frutasComM);

//Criando uma lista de FRUTAS:
const listaFrutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi", "Manga", "Melancia"];

//Exemplo de concatenanaçao de arrays com o operador spread para criar uma nova lista de frutas que inclui as frutas da listaFrutas e algumas frutas adicionais:
const frutasAdicionais = ["Abacate", "Goiaba"];

const listaFrutasCompleta = [...listaFrutas, ...frutasAdicionais];

console.log("Lista de Frutas Completa:", listaFrutasCompleta);

const dadosBasicos = { nome: 'Theo', idade: 9 };
const dadosExtras = { escola: 'FIAP', cidade: 'Curitiba' };

// Clonando e adicionando/atualizando propriedades
const usuarioCompleto = { ...dadosBasicos, ...dadosExtras, status: 'Ativo' };

console.log(usuarioCompleto);
// { nome: 'Theo', idade: 9, escola: 'FIAP', cidade: 'Curitiba', status: 'Ativo' }

// #ISSUE - 4
const btnLogin = document.querySelector("#btn-entrar");
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    const usuarioDigitado = document.querySelector('#input-user').value;
    const senhaDigitada = parseInt(document.querySelector('#input-pass').value);

    const usuarioEncontrado = listaUsuarios.find(u =>
        u.usuario === usuarioDigitado && u.senhaOriginal
        === senhaDigitada('#input-pass').value);

    console.log("Tipo do retorno:", typeof usuarioEncontrado);

    console.log("Tipo do retorno:", typeof usuarioEncontrado);
    const statusSessao = document.querySelector('#status-sessao');

    if (usuarioEncontrado) {
        alert("Acesso Autorizado");
        window.location.href = "dashboard.html";
    } else {
        statusSessao.textContent = "Usuário ou Senha inválidos";
        statusSessao.style.color = "red";
    }
});
function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);
 
    //Verificando se a senha é PAR:
 
    //Simulação de HASH:
    const valorHash = valorCampo **2;
    console.log("Senha modificada:", valorHash);
}

// #ISSUE - 2
// #ISSUE - 3

// Criação da Base (Pág. 21, 32):
// Criar um Array de Objetos chamado listaUsuarios contendo exatamente 3 usuários:
const listaUsuarios = [
    {
        usuario: "admin",
        senhaOriginal: 2026,
        perfil: "Comandante"
    },
    {
        usuario: "gestor",
        senhaOriginal: 1010,
        perfil: "Supervisor"
    },
    {
        usuario: "aluno",
        senhaOriginal: 5050,
        perfil: "Operador"
    }
];

//  Página de Destino:
//  Criar o arquivo dashboard.html com o código fornecido pelo professor.
//  Teste de Tipo (Pág. 22):
// No console, use console.log(typeof listaUsuarios) e console.table(listaUsuarios) para validar a estrutura.
console.log(typeof listaUsuarios);
console.table(listaUsuarios);
