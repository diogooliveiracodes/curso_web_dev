window.addEventListener('load', function() {   
    var $formulario = document.querySelector('#formulario');
    $formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(event){
    event.preventDefault();
    var $senha = document.querySelector('#senha').value;
    var $email = document.querySelector('#email').value;
    if(!$senha) {
        alert('Preencha o campo senha');
    }
    if(!$email) {
        alert('Preencha o campo email');
    }
}