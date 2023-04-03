window.addEventListener('load', function () {
    var form = document.getElementById('formulario');
    form?.addEventListener('submit', function(evento) {
        evento.preventDefault();
        consultaPokemon();
    })
})

async function consultaPokemon() {
    var formPokemon = document.getElementById("pokemon");
    var nomePokemon:string = formPokemon?.value;
    var resposta = await buscaApiPokemon(nomePokemon);
    var imagemPokemon = document.getElementById('imagemPokemon');
    var img = document.createElement('img');
    img.src = resposta.sprites.front_default;
    imagemPokemon?.appendChild(img); 
    const botaoReset = document.getElementById("reset");
    botaoReset?.addEventListener("click", () => {
        if (img) {
        imagemPokemon?.removeChild(img)    
        }
    });
   
       

}

function buscaApiPokemon (nomePokemon:string) {
    var url:string = "https://pokeapi.co/api/v2/pokemon/" + nomePokemon;
    return fetch(url).then((resposta)=>resposta.json()).catch((error)=>alert("Pokemon Inválido"))
}
