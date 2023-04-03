window.addEventListener('load', function() {   
    var $formulario = document.querySelector('#formulario');
    $formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(event){
    event.preventDefault();
    var $nome = document.querySelector('#nome').value;
    var $email = document.querySelector('#email').value;
    var $telefone = document.querySelector('#telefone').value;
    if(!$nome) {
        alert('Preencha o campo nome');
    }
    if(!$email) {
        alert('Preencha o campo email');
    }
    if(!$telefone) {
        alert('Preencha o campo telefone');
    }
}