window.addEventListener('load', function() {   
    var $formulario = document.querySelector('#formulario');
    $formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(event){
    event.preventDefault();
    var $senha = document.querySelector('#senha').value;
    var $email = document.querySelector('#email').value;
    var $confirmacao = document.querySelector('#confirmarSenha').value;
    var $termos = document.querySelector('#termos').checked;

    if (!$termos) {
        alert('Você deve aceitar os termos de uso.');
    }
    if(!$senha) {
        alert('Preencha o campo senha');
    }
    if(!$confirmacao) {
        alert('Preencha o campo confirmacao de senha');
    }
    if(!$email) {
        alert('Preencha o campo email');
    }
    if ($email && $senha && $confirmacao) {
        if ($senha !== $confirmacao) {
            alert('As senhas são diferentes. Digite novamente.')
        } else {
            confirm('Dados enviados.')
        }
    }
}