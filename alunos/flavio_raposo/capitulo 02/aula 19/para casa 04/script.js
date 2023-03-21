window.addEventListener('load', function(){
    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validarFormulario)
});

function validarFormulario(event) {
    event.preventDefault();
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirmacao = document.getElementById('confirmacao').value
    let termo = document.getElementById('termo').checked

    let alertaEmail = document.getElementById('alert-email')
    let alertaSenha = document.getElementById('alert-senha')
    let alertaConfirmacao = document.getElementById('alert-confirmacao')

    !email ? alertaEmail.classList.remove('d-none'): alertaEmail.classList.add('d-none')
    !senha ? alertaSenha.classList.remove('d-none'): alertaSenha.classList.add('d-none')
    !confirmacao ? alertaConfirmacao.classList.remove('d-none'):alertaConfirmacao.classList.add('d-none')


    if (!termo) {
        alert('Termo de Uso obrigatório.')
    }

    
    if (email && senha && confirmacao && termo) {
        if (senha !== confirmacao) {
            alert('As senhas são diferentes. Digite novamente.')
        } else {
            confirm('Dados enviados.')
        }
  
    }
}