window.addEventListener('load', function() {
    var formulario = document.getElementById('formularioConsulta');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        consultaPokemon();
    })
})

async function consultaPokemon() {
    var nomePokemon = document.getElementById('nomePokemon').value;
    var resposta = await requisicaoApiPokemon(nomePokemon);
    // console.log(resposta.sprites.front_shiny_female)

    var fotoPokemon = document.getElementById('fotoPokemon');
    var img = document.createElement('img');
    img.src = resposta.sprites.front_shiny
    fotoPokemon.appendChild(img);
}

function requisicaoApiPokemon(nomePokemon) {
    var $url = "https://pokeapi.co/api/v2/pokemon/" + nomePokemon;
    return fetch($url).then((resposta)=>resposta.json())
}