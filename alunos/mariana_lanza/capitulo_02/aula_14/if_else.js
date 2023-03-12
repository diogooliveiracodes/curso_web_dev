// 1 - Crie um algoritmo que receba um número e diga se ele é par ou ímpar.

var numero = 58
if(numero % 2 == 0) {
    console.log("o número é par")
} else {
   console.log("o número é ímpar")
}

// 1 a) imprime apenas se for impar

var numero = 3
if(numero % 2 != 0) {
    console.log("o numero é ímpar")
}

// 2 - Crie um algoritmo que receba um número e diga se ele é positivo ou negativo.

var numero = -4
if(numero > 0) {
    console.log("o número é positivo")
} else {
    console.log("o número é negativo")
}

// 2 a) apontar também quando o número for nulo

var numero = 0
if(numero > 0) {
    console.log("o número é positivo")
} else if (numero == 0) {
    console.log("o numero é nulo")
} else {
    console.log("o número é negativo")
}
// 3 - Crie um algoritmo que receba um número e diga se ele é maior que 10.

var numero = 10
if(numero > 10) {
    console.log("o número é maior do que 10")
} else {
    console.log("o número é menor ou igaul a 10")
}

// 4 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20.

var numero = 25
if(numero > 10 && numero < 20) {
    console.log("o número é maior que 10 e menor que 20")
} else {
    console.log("o número não é maior que 10 e menor que 20")
}

// 5 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20 ou se ele é 15.

var numero = 20
if(numero == 15) {
    console.log("o número é igual a 15")
} else if (numero > 10 && numero < 20){
    console.log("o número é maior que 10 e menor que 20")
} else {
    console.log("o número não é maior que 10 e menor que 20")
}