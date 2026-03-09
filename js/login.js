const botaoEnviar = document.querySelector('#btn-entrar')

botaoEnviar.addEventListener("click", validaCampo )

function validaCampo() {
    const codigoACesso = document.getElementById('input-senha');
    let codigoACessoNumber = parseInt(codigoACesso.value);
    
    console.log('resultado: ', codigoACessoNumber % 2 == 0);
}

