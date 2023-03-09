if (false) {
  console.log("É Verdadeiro!");
} else if (false) {
  console.log("É Verdadeiro o Else If!");
} else if (false) {
  console.log("É Verdadeiro o Else If de número 2!");
} else {
  console.log("É Falso!");
}

var x = "14";
if (x > 10 && x < 20 && typeof x === "string") {
  console.log("VERDADEIRO");
} else {
  console.log("FALSO");
}

//CAMEL CASE
var diaDaSemana = "Quarta-feira";

switch (diaDaSemana) {
  case "Domingo":
    console.log("Domingo");
    break;
  case "Segunda-feira":
    console.log("Segunda-feira");
    break;
  case "Terça-feira":
    console.log("Terça-feira");
    break;
  // E assim por diante
  default: //else
    console.log("Dia da semana inválido");
    break;
}

// ===================================================

var x = 0;
while (x > 10) {
  console.log(x);
  x++;
}

// while = enquanto
var x = Math.floor(Math.random() * 10) + 1;
while (x != 7) {
  console.log('Número sorteado: ' + x);
  // Gera um número aleatório entre 1 e 10
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  x = numeroAleatorio;
}
console.log('Você ganhou!');

// ===================================================

var x = 2;
do {
  console.log(x);
  x++;
} while (x < 10);

// ===================================================
for (var index = 19; index > 10; index--) {
  console.log('o valor de index é: ' + index);
}

// sequência lógica for (var i = 0; i < 10; i++)

// var index = 0; // inicialização
// valor de index é igual a zero
// index < 10; // condição
// { console.log(index);} // bloco de código
// index++ // incremento
// valor de index é igual ao número um.

// index < 10; // condição
// { console.log(index);} // bloco de código
// index++ // incremento
// valor de index é igual ao número dois.

// index < 10; // condição
// { console.log(index);} // bloco de código
// index++ // incremento
// valor de index é igual ao número três.

// =================================================
var indice = 4;
var lista = ['maçã', 'pêra', 'laranja', 'uva', 'mamão'];
console.log(lista[indice])
console.log('Quantidade de ítens da lista: ' + lista.length)

for (var i = 0; i < lista.length; i++){
  console.log(lista[i])
}


// Crie 5 exercícios de controle de fluxo em javascript