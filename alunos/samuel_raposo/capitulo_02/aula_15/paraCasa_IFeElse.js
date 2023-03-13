// IF/ELSE
// 1 - Crie um algoritmo que receba um número e diga se ele é par ou ímpar.
// 2 - Crie um algoritmo que receba um número e diga se ele é positivo ou negativo.
// 3 - Crie um algoritmo que receba um número e diga se ele é maior que 10.
// 4 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20.
// 5 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20 ou se ele é 15.

1//
var numero = 5
if (numero % 2 == 0){
  console.log("O numero " + numero + " é Par")
} else {
  console.log("O numero "+ numero + " é Impar")
}


2//. 

var num = 2
  if (num > 0 ){
      console.log("O numero "+ num + " é positivo");
  } else if (num === 0) {
    console.log("O numero "+ num + " e nulo");
  } else {
    console.log("O numero"+ num +" e negativo ")
  }

3//. 
var num = 11
if (num > 10){
    console.log(num + " e maior que 10 ");
} else if ( num == 10){
    console.log(num + " e igual a 10 ");
} else {
    console.log(num + " e menor que 10 ");
}

4//. 
var num = 21
if (num > 10 && num < 20){
    console.log(num + " e maior que 10 e menor que 20 ");
} else if (num == 10){
    console.log (num + " e igual a 10 e menor que 20 ");
} else {
    console.log (" Os numeros nao estao dentro do que foi solicitado ");
}

5//. 
var num = 15
if (num == 15) {
    console.log(num+ " e igual a 15 ");
} else if (num > 10 && num < 20){
    console.log(num+ " e e maior que 10 e menor que 20");
} else {
    console.log(" Os numeros nao estao entre 10 e 20");
}