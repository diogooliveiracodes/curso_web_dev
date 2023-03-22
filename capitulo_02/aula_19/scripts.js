window.addEventListener('load', function(){
    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validarFormulario)
});

function validarFormulario(event) {
    event.preventDefault(); // prevenir REcarregamento da tela
    let email = document.getElementById('email').value;
    let nome = document.getElementById('nome').value;
    let alertaEmail = document.getElementById('alert-email')
    let alertaNome = document.getElementById('alert-nome')

    // !email ? alertaEmail.classList.remove('d-none') : alertaEmail.classList.add('d-none')
    // !nome ? alertaNome.classList.remove('d-none') : alertaNome.classList.add('d-none')
    if(email != '') {
        alertaEmail.classList.add('d-none') // remove alerta
    } else {
        alertaEmail.classList.remove('d-none') // mostra alerta
    }

    if(nome) {
        alertaNome.classList.add('d-none') // remove alerta
    } else {
        alertaNome.classList.remove('d-none') // mostra alerta
    }
}

