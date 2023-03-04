// OPERAÇÕES EM JAVASCRIPT

// Atribuição "="
var professor = "Diogo Oliveira";
var curso = "Curso Web Dev com o professor: " + professor
// var curso = 'Curso Web Dev com o professor: Diogo Oliveira'
professor = "Natália Ribeiro"
curso = "Curso Web Dev com o professor: " + professor

// Adição "+"
var precoFeijao = 12.23;
var precoArroz = 11.12;
// var precoAgua = ' 7.90'; //não é do tipo número 
// var total = precoFeijao + precoArroz + precoAgua
// var total = precoFeijao + precoArroz + Number(precoAgua) // sanitização
var total = precoFeijao + precoArroz //output 23.35

// Subtração "-"
var meuDinheiro = 100.00;
var troco = meuDinheiro - total //output 76.65

// Multiplicação "*"
var parcelaCarro = 986.60;
var numeroParcelas = 36;
var valorCarro = parcelaCarro * numeroParcelas

// Divisão "/"
var parcelaCarro48 = valorCarro / 48;
// console.log(parcelaCarro48.toFixed(2))

// Módulo "%"
var modulo = 7 % 2 // resto
// console.log('O módulo de 7/2 é: '+modulo)
// obs: Verifica se é par ou ímpar!