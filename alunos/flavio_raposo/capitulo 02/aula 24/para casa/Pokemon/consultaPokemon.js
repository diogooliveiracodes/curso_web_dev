"use strict";
window.addEventListener('load', function () {
    var form = document.getElementById('formulario');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        consultaPokemon();
      
    });
});

async function consultaPokemon () {
    var formPokemon = document.getElementById("pokemon");
    var nomePokemon = formPokemon.value;
    var resposta = await bucscaApiPokemon(nomePokemon);
    var imagemPokemon = document.getElementById('imagemPokemon');
    var img = document.createElement('img');
    img.src = resposta.sprites.front_default;
    imagemPokemon.appendChild(img);
    const botaoReset = document.getElementById("reset");
    botaoReset?.addEventListener("click", () => {
        if (img) {
        imagemPokemon?.removeChild(img)    
        }
    });
} 
function bucscaApiPokemon(nomePokemon) {
    var url = "https://pokeapi.co/api/v2/pokemon/" + nomePokemon;
    return fetch(url).then((resposta)=>resposta.json()).catch((error)=>alert("Pokemon Inválido"))
}
