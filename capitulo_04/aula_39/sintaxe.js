// VARIÁVEIS
let nome = "João";
var sobrenome = "Silva";
const cpf = 12345678900;

// LISTAS
let lista = [1, 2, 3, 4, 5];
let lista2 = ["a", "b", [1, 2], { nome: "João", sobrenome: "Silva" }];
console.log(lista2[1]); // b

// OBJETOS
var pessoa = {};
var pessoa = {
  nome: "João",
  sobrenome: "Silva",
  parentes: ["Maria", "Paulo"],
  idade: 30,
  formado: false,
};
console.log(pessoa.sobrenome);

// FUNÇÕES
function soma(a, b) {
  return a + b;
}

// FUNÇÕES ANÔNIMAS
let soma2 = function (a, b) {
  return a + b;
};
let soma3 = (a, b) => {
  return a + b;
};
let soma4 = (a, b) => a + b;
console.log(soma4(7, 6)); // 13

// LAÇOS DE REPETIÇÃO
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// FOREACH
var objeto = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};
for (const chave in objeto) {
  console.log(`${chave}: ${objeto[chave]}`);
}

// CONDICIONAIS
if (i < 10) {
  console.log("i é menor que 10");
} else if (i == 10) {
  console.log("i é igual a 10");
} else {
  console.log("i é maior que 10");
}

// OPERADORES LÓGICOS
if (i < 10 && i > 5) {
  console.log("i é menor que 10 e maior que 5");
}

if (i < 10 || i > 5) {
  console.log("i é menor que 10 ou maior que 5");
}

// OPERADORES ARITIMÉTICOS
let a = 10;
let b = 5;
var c = a + b; // 15
var c = a - b; // 5
var c = a * b; // 50
var c = a / b; // 2
var c = a % b; // 0
var c = a ** b; // 100000

// OPERADORES TERNÁRIOS
let j = i < 10 ? 1 : 2;

// TRATAMENTO DE ERROS
try {
  // Código que pode gerar um erro
} catch (e) {
  // Tratamento do erro
} finally {
  // Código que sempre será executado
}
