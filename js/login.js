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
  console.log("resultado: ", valorCampo % 2 === 0);

  // Simulação de HASH:
  const valorHash = valorCampo ** 2;
  console.log("Senha modificada: ", valorHash);
}