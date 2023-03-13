// - SWITCH
// Crie 5 exercícios usando switch em javascript
// 1 - Crie um algoritmo que receba um dia da semana e diga se é dia útil ou final de semana.
// 2 - Crie um algoritmo que receba um mês e diga quantos dias ele tem.
// 3 - Crie um algoritmo que receba um mês e diga em qual trimestre ele está.
// 4 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo.
// 5 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo ignorando os espaços.

// 1 - Crie um algoritmo que receba um dia da semana e diga se é dia útil ou final de semana.
var dia = "diogo";
switch (dia) {
  case "segunda":
  case "terca":
  case "quarta":
  case "quinta":
  case "sexta":
    console.log("Dia útil");
    break;
  case "sabado":
  case "domingo":
    console.log("Final de semana");
    break;
  default:
    console.log("Dia inválido");
}

// 2 - Crie um algoritmo que receba um mês e diga quantos dias ele tem.
var mes = "fevereiro";
switch (mes) {
  case "janeiro":
  case "marco":
  case "maio":
  case "julho":
  case "agosto":
  case "outubro":
  case "dezembro":
    console.log("O mês tem 31 dias");
    break;
  case "abril":
  case "junho":
  case "setembro":
  case "novembro":
    console.log("O mês tem 30 dias");
    break;
  case "fevereiro":
    console.log("O mês tem 28 dias");
    break;

  default:
    console.log("Mês inválido");
}

var mes = "junho";
if (
  mes == "janeiro" ||
  mes == "marco" ||
  mes == "maio" ||
  mes == "julho" ||
  mes == "agosto" ||
  mes == "outubro" ||
  mes == "dezembro"
) {
  console.log("O mês tem 31 dias");
} else if (
  mes == "abril" ||
  mes == "junho" ||
  mes == "setembro" ||
  mes == "novembro"
) {
  console.log("O mês tem 30 dias");
} else if (mes == "fevereiro") {
  console.log("O mês tem 28 dias");
}

var meses = [
  "janeiro",
  "fevereiro",
  "marco",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

var trintaEUmDias = [0, 2, 4, 6, 7, 9, 11];
var trintaDias = [3, 5, 8, 10];
var vinteEOitoDias = [1];

var mes = "junho";
var mesIndex = meses.indexOf(mes);
if (trintaEUmDias.indexOf(mesIndex) != -1) {
  console.log("O mês tem 31 dias");
} else if (trintaDias.indexOf(mesIndex) != -1) {
  console.log("O mês tem 30 dias");
} else if (vinteEOitoDias.indexOf(mesIndex) != -1) {
  console.log("O mês tem 28 dias");
} else {
  console.log("Mês inválido");
}

// 3 - Crie um algoritmo que receba um mês e diga em qual trimestre ele está.
var mes = "janeiro";
switch (mes) {
  case "janeiro":
  case "fevereiro":
  case "marco":
    console.log("O mês está no primeiro trimestre");
    break;
  case "abril":
  case "maio":
  case "junho":
    console.log("O mês está no segundo trimestre");
    break;
  case "julho":
  case "agosto":
  case "setembro":
    console.log("O mês está no terceiro trimestre");
    break;
  case "outubro":
  case "novembro":
  case "dezembro":
    console.log("O mês está no quarto trimestre");
    break;
  default:
    console.log("Mês inválido");
}

// 4 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo.
var palavra = "arara";
var palavraInvertida = palavra.split("").reverse().join("");
if (palavra === palavraInvertida) {
  console.log("É um palíndromo");
} else {
  console.log("Não é um palíndromo");
}

// .split("") // quebra a palavra em letras
// .reverse() //inverte a ordem dos ítens da lista
// .join("") // junta os ítens da lista em uma string

// 5 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo ignorando os espaços.
var palavra = "subi no onibus";
var palavraSemEspaco = palavra.replace(/\s/g, "");
var palavraInvertida = palavraSemEspaco.split("").reverse().join("");

if (palavraSemEspaco === palavraInvertida) {
  console.log("É um palíndromo");
} else {
  console.log("Não é um palíndromo");
}
