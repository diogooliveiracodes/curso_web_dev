window.addEventListener('load', function(){
    let formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validarFormulario)
});


function validarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value
    const cep = document.getElementById('cep').value
    const rua = document.getElementById('rua').value
    const bairro = document.getElementById('bairro').value
    

    const alertaNome = document.getElementById('alert-nome')
    const alertaCep = document.getElementById('alert-cep')
    const alertaRua = document.getElementById('alert-rua')
    const alertaBairro = document.getElementById('alert-bairro')


    !nome ? alertaNome.classList.remove('d-none'): alertaNome.classList.add('d-none')
    !cep ? alertaCep.classList.remove('d-none'): alertaCep.classList.add('d-none')
    !rua ? alertaRua.classList.remove('d-none'):alertaRua.classList.add('d-none')
    !bairro ? alertaBairro.classList.remove('d-none'):alertaBairro.classList.add('d-none')
       
}

function buscarCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const alertaRua = document.getElementById('alert-rua')
  const alertaBairro = document.getElementById('alert-bairro')

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("rua").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro ;
      document.getElementById("alert-rua").classList.add("d-none");
      document.getElementById("alert-bairro").classList.add("d-none")

      if (!data.logradouro) {
        alert('CEP '+cep+ ' Inválido!!!')
      }
    })
    .catch(error => {
      console.log(error);
    });

    !rua ? alertaRua.classList.remove('d-none'):alertaRua.classList.add('d-none')
    !bairro ? alertaBairro.classList.remove('d-none'):alertaBairro.classList.add('d-none')
}







  
