// EXERCÍCIO 01
// Criar um programa em JavaScript que declare duas variáveis do tipo número e 
// realize as quatro operações básicas da matemática utilizando essas variáveis.
// soma +
// subtração -
// multiplicação *
// divisão /
var numero1 = 10;
var numero2 = 5;
var soma = numero1 + numero2; // 15
var subtracao = numero1 - numero2; // 5
var multiplicacao = numero1 * numero2; // 50
var divisao = numero1 / numero2; // 2

// EXERCÍCIO 02
// Escrever um programa em JavaScript que utilize variáveis do tipo string para armazenar o nome, 
// sobrenome e idade de uma pessoa e imprima uma mensagem no console.
var nome = "João";
var sobrenome = "Silva";
var idade = 30;
console.log("Olá, meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos.");

// EXERCÍCIO 03
// Escrever um programa que utilize variáveis do tipo objeto para representar informações sobre um filme, 
// como título, diretor, elenco e ano de lançamento. Imprimir essas informações no console.
var filme = {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    elenco: ["Marlon Brando", "Al Pacino", "James Caan"],
    anoLancamento: 1972
};
console.log("Título: " + filme.titulo);
console.log("Diretor: " + filme.diretor);
console.log("Elenco: " + filme.elenco);
console.log("Ano de Lançamento: " + filme.anoLancamento);

// EXERCÍCIO 04
// Criar um programa que utilize variáveis do tipo array para armazenar uma lista de 
// nomes e imprimir essa lista no console.
var nomes = ["João", "Maria", "José"];
console.log(nomes);
