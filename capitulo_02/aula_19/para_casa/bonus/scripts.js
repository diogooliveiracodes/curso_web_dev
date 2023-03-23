window.addEventListener('load', function() {   
    $cepPrimitivo = document.querySelector('#cep');
    $cepPrimitivo.addEventListener('change', function(){
        $cepPrimitivo = document.querySelector('#cep');
        if($cepPrimitivo.value.length > 7 && $cepPrimitivo.value.length < 10){
            buscaCep(event);
        }
    });
});

function buscaCep(event){
    event.preventDefault();
    $cepPrimitivo = document.querySelector('#cep').value;
    
    $logradouro = document.querySelector('#logradouro');
    $bairro = document.querySelector('#bairro');
    $cep = $cepPrimitivo.replace('-', '').replace('.', ''); // sanitiza o cep
    var $url = 'https://viacep.com.br/ws/' + $cep + '/json/';
    fetch($url)
        .then((dados) => {
            return dados.json();
        })
        .then((dados) => {
            document.querySelector('#logradouro').value = dados.logradouro;
            document.querySelector('#bairro').value = dados.bairro;
        })
}