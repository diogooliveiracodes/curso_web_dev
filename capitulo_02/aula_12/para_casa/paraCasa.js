// 1. Crie uma lista com 5 ítens
var lista = ["João", "Maria", "José", "Pedro", "Paulo", 5];
console.log(lista);

// 2. Atribua novos valores a lista
lista[0] = "João Silva";
lista[3] = "Pedro de Paula";

// 3. Imprima a lista no console
console.log(lista);

// 4. Imprima a quantidade de ítens da lista
console.log(lista.length);

// 5. Imprima o índex do ítem de índice 3 da sua lista utilizando o valor atribuído a ele
console.log(lista.indexOf("Pedro de Paula"));

// 6. Crie uma nova lista e adicione a lista anterior como um ítem dela
var novaLista = [];
novaLista.push(lista);

// 7. Imprima a primeira lista através da segunda lista
console.log(novaLista[0]);

// 8. Repita os exercícios anteriores agora utilizando Objetos (menos o 3, 6, 7)
// 1. Crie um objeto com 5 propriedades
var objeto = {
    nome: "João",
    sobrenome: "Silva",
    idade: 30,
    altura: 1.80,
    peso: 80
};
// 2. Atribua novos valores ao objeto
objeto.peso = 92;
objeto.idade = 54;

// 3. Imprima o objeto no console
console.log(objeto);

// 4. Imprima a quantidade de propriedades do objeto
console.log(Object.keys(objeto).length);

// var keys = ['nome', 'sobrenome', 'idade', 'altura', 'peso'];
// console.log(keys.length);
