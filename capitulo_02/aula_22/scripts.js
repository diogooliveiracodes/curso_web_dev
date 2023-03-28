function buscarCep(cep) {
    var $url = "https://viacep.com.br/ws/" + cep + "/json/";
    // return fetch($url).then((resposta)=> resposta.json())
    return fetch($url).then(function(resposta) {
        return resposta.json()
    })
}

// function buscarCep(cep) {
//     let endereco = Object;
//     endereco.logradouro = 'Rua número 2'
//     return new Promise(function(resolve) {
//         resolve(endereco)
//     })
// }

// função assíncrona
async function imprimir(cep) {
    const endereco = await buscarCep(cep);
    console.log(`Função Assíncrona: O Cep ${cep} pertence a ${endereco.logradouro}`);
}

//função síncrona
function imprimirAsync(cep) {
    const endereco = buscarCep(cep);
    console.log(`Função Síncrona: O Cep ${cep} pertence a ${endereco.logradouro}`);
}

imprimir(35701268);
imprimirAsync(35701268);