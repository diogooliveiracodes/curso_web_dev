// BREAK E CONTINUE
// 1 - Imprima todos os meses da lista, menos Abril.
// 2 - crie um jogo de dado que pare se o 3 for sorteado.

//1.
var meses = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

for (var i = 0; i < meses.length; i++) {
  if(meses[i] == "abril") {
    continue;
  }
  console.log(meses[i]);
}


//2 crie um jogo de dado que pare se o 3 for sorteado.
var numeroSorteado = 10;
for (var i = 1; 1 == 1; i++){
    numeroSorteado =  Math.floor(Math.random() * 6) + 1;
    console.log('sorteado: ' + numeroSorteado);
    console.log(i);
    if(numeroSorteado == 4) {
        break;
    }
}
