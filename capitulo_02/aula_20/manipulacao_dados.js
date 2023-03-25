// - parseInt() e parseFloat(): Ambas as funções são usadas para converter strings em números inteiros ou decimais, respectivamente.
var nome = 'João';
var idade = '25';
var alturaJoao = '1.80';
var pesoJoao = '80.5';

function calcularIMC(peso, altura) {
    // console.log(typeof(peso))
    // console.log(typeof(altura))
    var imc = parseFloat(peso) / (altura ** 2);
    console.log(imc);
}

calcularIMC(pesoJoao, parseFloat(alturaJoao));

// ===================================================================
//toString(): Converte um número em uma string.

var numero = 10;
console.log(numero + ' | tipo: ' + typeof(numero));

var numeroToString = numero.toString();
console.log(numeroToString + ' | tipo: ' + typeof(numeroToString));


var variavel = false;
console.log(variavel + ' | tipo: ' + typeof(variavel));

var variavelToString = variavel.toString();
console.log(variavelToString + ' | tipo: ' + typeof(variavelToString));

// se transformar uma variável em string, ela vai ser considerada como true, 
//mesmo que o valor seja '''''false'''''.
// if('false') {
if(variavelToString) {
    console.log('Entrou no if');
}

if('') {
    console.log('Não vai entrar no if');
}

if(false) {
    console.log('Não vai entrar no if');
}


// ===================================================================
// - Number(): Essa função é usada para converter qualquer valor em um número.

var numero = 10;
var numeroToString = String(numero)
console.log(numero + ' | tipo: ' + typeof(numero));
console.log(numeroToString + ' | tipo: ' + typeof(numeroToString));

var boleano = false;
var boleanoToString = String(boleano)
console.log(boleano + ' | tipo: ' + typeof(boleano));
console.log(boleanoToString + ' | tipo: ' + typeof(boleanoToString));

// ===================================================================
//- isNaN(): Essa função é usada para verificar se um valor é um número ou não.
var numero = 10;
console.log(isNaN(numero));

// Só retorna TRUE se o que for passado como parâmetro não for um número.
// Not a Number
isNaN(123); // false
isNaN('123'); // false
isNaN('abc'); // true
isNaN(true); // false
isNaN(undefined); // true


// ===================================================================
// - toFixed(): Essa função é usada para formatar um número com um número específico de 
// casas decimais.
var numero = 10.129456789;
console.log(numero.toFixed(2));
// var numeroDuasCasas = Math.floor(numero * 100) / 100; // gambiarra para não arredondar
// console.log(numeroDuasCasas);

// ===================================================================
//- toUpperCase() e toLowerCase(): Essas funções são usadas para converter uma string para
// maiúsculas ou minúsculas, respectivamente.

var nome = 'João';
console.log(nome.toUpperCase());

var nome = 'MARIA DA SILVA';
console.log(nome.toLowerCase());

// ===================================================================
// - split(): Essa função é usada para dividir uma string em um array de substrings 
// com base em um separador.

var entradaDados = "joao;33;1.80;80.5";
var lista = entradaDados.split(';'); // [ '10', '129456789' ]
console.log(typeof(parseFloat(lista[2])));

for(var i = 0; i < lista.length; i++) {
    // console.log(lista[i]);
    if(i == 1 && lista[i] >= 20 && lista[i] <= 30) {
        console.log(lista[i]);
    } else {
        console.log('Não atendeu a condição');
    }
}

// OUTRO CASO DE USO DO SPLIT
var frase = "Esta é uma frase com palavrão";
var lista = frase.split(' ');
console.log(lista);

for(var i = 0; i < lista.length; i++) {
    if(lista[i] == 'palavrão') {
        console.log('Não posso dizer palavrão');
    }
}


// ===================================================================
// - join(): Essa função é usada para juntar elementos de um array em uma string com base 
// em um separador.
var numero = 10.129456789;
var numeroToString = numero.toString();
var lista = numeroToString.split('.'); // [ '10', '129456789' ]
// var numeroFinal = lista[0] + '.' + lista[1].substr(0, 2);
lista[1] = lista[1].substr(0, 2); // [ '10', '12']
var numeroFinal = lista.join('.');
console.log(numeroFinal);

// OUTRO CASO DE USO DO JOIN
var frase = "Esta é uma frase com palavrão";
var lista = frase.split(' ');

for(var i = 0; i < lista.length; i++) {
    if(lista[i] == 'palavrão') {
        lista[i] = '*****';
    }
}

var fraseFinal = lista.join(' ');
console.log(fraseFinal);

var lista = ['esta', 10, 'lista'];
var fraseFinal = lista.join('|');
console.log(fraseFinal);

// var input = 'nubank digital';
// var inputMinusculo = input.toLowerCase();
// var inputMinusculoSplit = inputMinusculo.split(' ');
// if(inputMinusculoSplit[0] != 'itau') {
//     console.log('Não é um banco válido')
// }

// ===================================================================
//- slice(): Essa função é usada para extrair uma parte de uma string com base 
// em um índice de início e um índice final.
var frase = "Esta é uma frase com palavrão";
var fraseFinal = frase.slice(5, 16);
console.log(fraseFinal);