
const botaoEnviar = document.querySelector("#btn-enviar");

// botaoenviar.addEventListener("click", function() {
//     console.log("TESTE")
// });

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo() {
    // Capturando os dados do campo SENHA:
    const campoSenha = document.getElementById("input-senha");
    const valorCampo = Number(campoSenha.value);

    // Verifica se o valor é um número válido antes de prosseguir
    if (Number.isNaN(valorCampo)) {
        console.log("Valor de senha inválido.");
        return;
    }

    // Verificando se a senha é PAR:
    console.log(valorCampo % 2 === 0);
}
=======
// Capturando os dados do campo SENHA:


const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);


    console.log(valorCampo % 2 == 0);


    // Simulacao de HASH
    const valorHash = valorCampo**
    console.log(valorHash);


}






