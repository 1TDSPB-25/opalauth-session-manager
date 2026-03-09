
const botaoEnviar = document.querySelector("#btn-entrar")

//botaoEnviar.addEventListener( "click" , function() {
 //   console.log("TESTE")
//} )

function validaCampo(){
    // Capturando os dados do campo senha:
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt(campoSenha.value);
}



//Verificando se a senha é par
console.log(valorCampo %2 == 0);

botaoEnviar.addEventListener( "click" , validaCampo());
