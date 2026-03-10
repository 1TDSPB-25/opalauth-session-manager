
//#ISSUE - 1
let nomeUsuario = "opalAuth";
let tentativasLogin = 3;



console.log(`Bem-vindo, ${nomeUsuario}! Você tem ${tentativasLogin} tentativas de login restantes.`);

const botaoEnviar = document.querySelector("#btn-entrar");

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

// Capturando os dados do campo SENHA:


//#ISSUE - 1
let nomeUsuario = "OpalAuth";
let tentativasLogin = 3;

console.log(`Bem-vindo, ${nomeUsuario}! Você tem ${tentativasLogin} tentativas de login restantes.`);

const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

feature/tarefa-01-setup-rm567915
function validaCampo(){
    //Capturando os dados do campo SENHA:
    const campoSenha = document.getElementById("input-senha");
    const valorCampo = Number(campoSenha.value);
     
    //Verifica se o valor é um número válido antes de prosseguir
    if(Number.isNaN(valorCampo)){
        console.log9("Valor de senha inválido.");
        return;
    }

    //Verificando se a senha é PAR:
    console.log("resultado:", valorCampo % 2 == 0);
 
    //Simulação de HASH:
    const valorHash = valorCampo **2;
    console.log("Senha modificada:", valorHash);

function validaCampo() {

    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);


    console.log(valorCampo % 2 == 0);


    // Simulacao de HASH
    const valorHash = valorCampo ** 2
    console.log(valorHash);


}






// Capturando os dados do campo SENHA:
const campoSenha = document.getElementById("input-senha");
const valorCampo = Number(campoSenha.value);

// Verifica se o valor é um número válido antes de prosseguir
if (Number.isNaN(valorCampo)) {
    console.log("Valor de senha inválido.");
    return;
}

// Verificando se a senha é PAR:
console.log("resultado: ", valorCampo % 2 === 0);

// Simulação de HASH:
const valorHash = valorCampo ** 2;
console.log("Senha modificada: ", valorHash);
}

  // Simulação de HASH:
  const valorHash = valorCampo ** 2;
  console.log("Senha modificada: ", valorHash);
}

const nomeUsuario = "Kenji";
let tentativasLogin = 0;

console.log(`Sistema OpalAuth iniciado para o usuário: ${nomeUsuario}`);
