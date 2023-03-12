
// 1 - Crie um algoritmo que receba um número e imprima todos os números pares de 0 até o número inserido.

var numero = 10;
for (var i = 0; i <= numero; i++) {
    if (i % 2 == 0) {
        console.log("o número é: " + i);
    }
}
// 2 - Crie um algoritmo que receba um número e imprima todos os números ímpares de 0 até o número inserido.

var numero = 25;
for (var i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
        console.log("o número é: " + i);
    }
}

// 3 - Crie um algoritmo que receba um número e imprima todos os números de 0 até o número inserido.

var numero = 25;
for (var i = 0; i <= numero; i++) {
        console.log("o número é: " + i);
    }

// 4 - Crie um algoritmo que receba um número e imprima a tabuada dele de 1 a 10.

var numero = 4;
for (var i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}

// 5 - Crie um algoritmo que receba um número e imprima a tabuada dele de 10 a 1.

var numero = 4;
for (var i = 10; i >= 0; i--) {
    console.log(numero + " x " + i  + " = " + numero * i)
}