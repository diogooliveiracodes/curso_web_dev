// - FOR
// Crie 5 exercícios usando for em javascript
// 1 - Crie um algoritmo que receba um número e imprima todos os números pares de 0 até o número inserido.
// 2 - Crie um algoritmo que receba um número e imprima todos os números ímpares de 0 até o número inserido.
// 3 - Crie um algoritmo que receba um número e imprima todos os números de 0 até o número inserido.
// 4 - Crie um algoritmo que receba um número e imprima a tabuada dele de 1 a 10.
// 5 - Crie um algoritmo que receba um número e imprima a tabuada dele de 10 a 1.

// 1 - Crie um algoritmo que receba um número e imprima todos os números pares de 0 até o número inserido.
var numero = 4;
for (var i = 0; i <= numero; i++) {
  if (i % 2 == 0) {
    console.log("O número é: " + i);
  }
}
// 1 - var i = 0
// 2 - i <= 10
// 3 - if (i % 2 == 0) // verifica se é par
// 4 - console.log("O número é: " + i); // se for par ele imprime
// 5 - i++ // incrementa o valor de i

// var numero = 4;
// for (var i = 0; i <= numero; i++) {
//   console.log("início do bloco");
//   if (i % 2 == 0) {
//     console.log("O número é: " + i);
//   } else {
//     console.log("O número é ímpar");
//   }
//   console.log("fim do bloco");
// }

// 2 - Crie um algoritmo que receba um número e imprima todos os números ímpares de 0 até o número inserido.var numero = 4;
var numero = 13;
for (var i = 0; i <= numero; i++) {
  if (i % 2 != 0) {
    console.log("O número é: " + i);
  }
}

// 3 - Crie um algoritmo que receba um número e imprima todos os números de 0 até o número inserido.
var numero = 4;
for (var i = 0; i <= numero; i++) {
  console.log("O número é: " + i);
}

// 4 - Crie um algoritmo que receba um número e imprima a tabuada dele de 1 a 10.
var numero = 4;
for (var i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

// numero = 4
// i = 1
// se i for menor ou igual a 10 {
//     "4 x 1 = 4"
// }

// numero = 4
// i = 2
// se i for menor ou igual a 10 {
//    " 4   x   2   =   8 "
// }

// 5 - Crie um algoritmo que receba um número e imprima a tabuada dele de 10 a 1.
var numero = 4;
for (var i = 10; i >= 1; i--) {
  console.log(numero + " x " + i + " = " + numero * i);
}