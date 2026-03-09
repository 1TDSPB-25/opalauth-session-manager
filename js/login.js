

const botaoEnviar = document.querySelector("#btn-entrar");

//botaoEnviar.addEventListener("click", function(){
//  console.log("Teste")
//});


function validaCampo(){
// Capturando os dados do campo SENHA:
const campoSenha = document.getElementById("Input-senha");
let valorCampo = parseInt (campoSenha.value)

// Verificando se a senha é PAR
console.log(valorCampo % 2 == 0);
}