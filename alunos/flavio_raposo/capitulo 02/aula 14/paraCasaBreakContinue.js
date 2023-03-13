//Para Casa 01 - Imprima todos os meses da lista, menos Abril e Junho.

var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

for (var i = 0; i < meses.length; i++) {
    if (meses[i] == "Abril" || meses[i] == "Junho") {
        continue;
    }
    console.log(meses[i]);
}
