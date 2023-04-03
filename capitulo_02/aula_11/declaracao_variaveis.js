// ###################### DECLARAÇÃO DE VARIÁVEIS:

{ //ABERTURA DO BLOCO
  var nome = 'Diogo'; //Contexto Global
  let sobrenome = 'Oliveira'; // Contexto de bloco

  nome = 'Natália';
  sobrenome = 'Ribeiro';

  console.log(nome)
  console.log(sobrenome)
} //FECHAMENTO DO BLOCO
  
// console.log(nome) // funciona fora do bloco
//console.log(sobrenome) // Não funciona fora do bloco!

const BRASIL = -3;
const INGLATERRA = 0;

// BRASIL = -2; //não funciona pois é constante


// ######################################################################
// ###################### REGRAS PARA NOMEAR VARIÁVEIS:
// ######################################################################

// 1) Não podem conter palavras reservadas
// let, var, if, else, for, function

// 2) Case Sensitive

var Diogo = 'Nome';
var diogo = 'Meu nome';

var diogoOliveira = 'Meu nome completo';
var diogooliveira = 'Opa';

// console.log(diogooliveira)

var nome1 = 'Diogo';
var nome2 = 'Oliveira';
// var 1nome = 'Diogo'; //NÃO FUNCIONA!

var $moeda = 'Real';
var _privada = 'CPF do Cliente';

// 3) CONVENÇÃO NO JAVASCRIPT

// CAMEL CASE
var n = 'Diogo';
var nomeDoClienteDoCursoDeWebDev = 'Natalia';
var nomeCliente = 'João';

// SNAKE CASE
var client_name = 'Maria'; // não utilizamos no JS


// ######################################################################
// ###################### TIPOS DE VARIÁVEIS:
// ######################################################################

// NUMBER
var numero = 123; //inteiro
var flutuante = 5.99; //decimal

// console.log(typeof(numero))

// STRING
// numero = 'agora é um texto';
// console.log(typeof(numero))
var nome = 'Diogo';
var sobrenome = "Oliveira";
var numeroTipoString = '987';
var interpolacao = `Meu nome é: ${nome}`;
var concatenacao = "Meu nome é: "+nome;

// cuidado para não concatenar números com strings
var resultado = numero + numeroTipoString

// NULL
var semValor = null;

// UNDEFINED
var aindaNaoPreenchi; // ainda não foi declarada

// BOOLEAN
var verdadeiro = true;
var falso = false;
// usa nos if()

// ARRAY (lista)
var lista = ['Diogo', 'Natália', 'João', 'Maria', ['pedro', 'caio']]
// console.log(lista) //['Diogo', 'Natália', 'João', 'Maria']
// console.log(lista[0]) //'Diogo'
// console.log(lista[4][0]) //'pedro'

// OBJECT
var cardapio = {
  chave: 'Valor',
  agua: "10,00",
  coca: "5,00",
}

var alunos = {
  diogoOliveira: [32, 256, 'oliveira'],
  nataliaRibeiro: {profissao: 'Programadora'}
}