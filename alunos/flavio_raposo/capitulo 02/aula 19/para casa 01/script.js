window.addEventListener('load', function(){
    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validarFormulario)
});

function validarFormulario(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;

    let alertaNome = document.getElementById('alert-nome')
    let alertaEmail = document.getElementById('alert-email')
    let alertaTelefone = document.getElementById('alert-telefone')

    !nome ? alertaNome.classList.remove('d-none'): alertaNome.classList.add('d-none')
    !email ? alertaEmail.classList.remove('d-none'): alertaEmail.classList.add('d-none')
    !telefone ? alertaTelefone.classList.remove('d-none'): alertaTelefone.classList.add('d-none')

    if (nome && email && telefone){
        confirm('Dados enviados com sucesso!!!')
    }
}