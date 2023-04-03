window.addEventListener('load', function(){
    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validarFormulario)
});

function validarFormulario(event) {
    event.preventDefault(); // prevenir REcarregamento da tela
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmacao = document.getElementById('confirmacao').value;
    let termos = document.getElementById('termos').checked;

    let alertaEmail = document.getElementById('alert-email')
    let alertaSenha = document.getElementById('alert-senha')
    let alertaConfirmacao = document.getElementById('alert-confirmacao')

    !email ? alertaEmail.classList.remove('d-none') : alertaEmail.classList.add('d-none')
    !senha ? alertaSenha.classList.remove('d-none') : alertaSenha.classList.add('d-none')
    !confirmacao ? alertaConfirmacao.classList.remove('d-none') : alertaConfirmacao.classList.add('d-none')
    
    if (!termos) { 
        alert('Você precisa aceitar os termos de uso!')
    }

    if(senha && confirmacao && senha !== confirmacao) {
        alert('Confirmação de senha inválida !')
    }

    if(email && senha && termos && confirmacao && senha === confirmacao) {
        confirm("Formulário Enviado!")
    }

}