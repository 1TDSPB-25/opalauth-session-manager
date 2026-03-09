
const botaoEnviar = document.querySelector("main > button");

botaoEnviar.addEventListener("click", function() {
  console.log("TESTE");
});

function validaCampo(){
// capturando os dados do campo senha
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt(campoSenha.value);


//verificando se a senha é PAR
console.log(valorCampo % 2 == 0);

//simulação de hash

const valorHash = valorCampo** 2;
console.log(valorHash);
}
