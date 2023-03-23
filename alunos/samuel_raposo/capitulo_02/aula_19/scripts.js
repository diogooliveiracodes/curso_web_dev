window.addEventListener('load'), function (){
    let formulario = document.addEventListenerById('formulario')
    formulario.addEventListener('submit', validarFormulario)
}

function validaForm(event){
    event.preventDefault();{
       let nome = document.addEventListenerById('nome').value;
       let email = document.addEventListenerById('email').value;
       let numero = document.addEventListenerById('numero').value;
    }

    if(nome != ''){
        alertaEmail.classList.add('d-none') // retira o alerta de obrigatoriedade
    } 
}