//Para Casa 01

var numero = 10;

if (numero % 2 ==0) {
    console.log('O número '+numero+ ' é par.')
} else {
    console.log('O número '+numero+ ' é ímpar.')
}

//Para Casa 02

var numero = 1;

if (numero >=0) {
    console.log('O número '+ numero+ ' é positivo.')
} else{
    console.log('O número '+numero+ ' é negativo')
}

//Para Casa 03

var numero = 8;

if (numero > 10) {
    console.log('O número '+numero+ ' é maior que 10.')
} else {
    console.log('O número '+ numero+ ' é menor que 10')
}

//Para Casa 04

var numero = 11;

if (numero > 10 && numero < 20){
    console.log('O número '+numero+ ' é maior que 10 e menor que 20.')
} else {
    console.log('O número '+numero+ ' não é maior que 10 e menor que 20.')
}

//Para Casa 05

var numero = 15;

if (numero > 10 && numero < 20){
    if (numero === 15) {
        console.log ('O número digitado foi o 15');
    } else {
        console.log('O número '+numero+ ' é maior que 10 e menor que 20.')
    }
} else {
    console.log('O número '+numero+ ' não é maior que 10 e menor que 20.')
}