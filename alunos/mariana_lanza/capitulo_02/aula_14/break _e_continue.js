// 1 - Imprima todos os meses da lista mesnos abril.

var meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

for (var i = 0; i < meses.length; i++) {
    if(meses[i] == "abr") {
        continue;
    }
    console.log(meses[i]);
}

// 2 - Imprima todos os meses da lista mesnos abril.

var numeroSorteado = 0;
for (var i = 0; i <1000; i++ ) {
    numeroSorteado = Math.floor(Math.random() * 10) + 1;
    console.log('sorteado:' + numeroSorteado);
    console.log(i);
    if(numeroSorteado == 7) {
        break;
    }
}