window.addEventListener('load', function(){
    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validarFormulario)
});

function validarFormulario(event) {
    event.preventDefault();
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let alertaEmail = document.getElementById('alert-email')
    let alertaSenha = document.getElementById('alert-senha')

    !email ? alertaEmail.classList.remove('d-none'): alertaEmail.classList.add('d-none')
    !senha ? alertaSenha.classList.remove('d-none'): alertaSenha.classList.add('d-none')

    if (email && senha) {
        confirm('Dados enviados.')
    }
}