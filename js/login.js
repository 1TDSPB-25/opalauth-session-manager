
const botaoEnviar = document.querySelector("#btn-entrar")

//botaoEnviar.addEventListener("click",function() {
//    console.log("TESTE");
//} );

botaoEnviar.addEventListener(" click " , validaCampo );


function validaCampo(){
//capturando os dados do campo senha.
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt(campoSenha.value);
   

console.log(valorCampo % 2 == 0);

}


