// - IF/ELSE
// 1 - Crie um algoritmo que receba um número e diga se ele é par ou ímpar.
// 2 - Crie um algoritmo que receba um número e diga se ele é positivo ou negativo.
// 3 - Crie um algoritmo que receba um número e diga se ele é maior que 10.
// 4 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20.
// 5 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20 ou se ele é 15.

// 1 - Crie um algoritmo que receba um número e diga se ele é par ou ímpar.
var numero = 233;
if (numero % 2 == 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

// 2 - Crie um algoritmo que receba um número e diga se ele é positivo ou negativo.
var numero = "aaa";
if (numero > 0) {
  console.log("O número é positivo");
} else if (numero == 0) {
  console.log("O número é nulo");
} else {
  console.log("O número é negativo");
}

if (numero > 0) console.log("O número é positivo");
if (numero == 0) console.log("O número é nulo");
if (numero < 0) console.log("O número é negativo");
if (typeof numero != "number") console.log("O valor não é um número");

// 3 - Crie um algoritmo que receba um número e diga se ele é maior que 10.
var numero = 11;
if (numero > 10) {
  console.log("O número é maior que 10");
} else {
  console.log("O número é menor ou igual a 10");
}

// 4 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20.
var numero = 9;
if (numero > 10 && numero < 20) {
  console.log("O número é maior que 10 e menor que 20");
} else {
  console.log("O número não é maior que 10 e menor que 20");
}

// criança, adolescente, adulto ou idoso?
var idade = 11;
if (idade < 12) {
  console.log("Criança");
} else if (idade < 60 && idade >= 18) {
  console.log("Adulto");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Idoso");
}

// 5 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20 ou se ele é 15.
var numero = 16;
if (numero > 10 && numero < 20) {
  console.log("O número é maior que 10 e menor que 20");
  if (numero == 15) {
    console.log("E o número é 15");
  } else {
    console.log("E o número não é 15");
  }
}

// operador ternário
var numero = 15;
if (numero > 10 && numero < 20) numero == 15 ? console.log('O número é 15') : console.log('O número é maior que 10 e menor que 20');



