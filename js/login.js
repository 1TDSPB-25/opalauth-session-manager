
const botaoEnviar = document.querySelector("#btn-entrar");

feature/tarefa-02-hashing
botaoEnviar.addEventListener("click", validaCampo);

function validaCampo(){
//capturando os dados do campo senha
const campoSenha = document.getElementById("input-senha");
let valorCampo = parent(campoSenha.value);

//Verificando se a senha é PAR
console.log(valorCampo % 2 == 0);
}

// botaoEnviar.addEventListener( "click" , function(){
//     console.log("TESTE");
// }  );

botaoEnviar.addEventListener( "click" , validaCampo );

function validaCampo(){
    //Capturando os dados do campo SENHA:
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);
    
    //Verificando se a senha é PAR
    console.log(valorCampo % 2 == 0);
}



feature/tarefa-02-hashing
