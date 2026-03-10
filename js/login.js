// #ISSUE - 1
let nomeUsuario = "OpalAuth";
let tentativasLogin = 3;

console.log(`Bem-vindo, ${nomeUsuario}! Você tem ${tentativasLogin} tentativas de login restantes.`);

const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo() {
    // Capturando os dados do campo SENHA:.....
    const campoSenha = document.getElementById("input-senha");
    const valorCampo = Number(campoSenha.value);

    // Verifica se o valor é um número válido antes de prosseguir....
    if (Number.isNaN(valorCampo)) {
        console.log("Valor de senha inválido.");
        return;
    }
}