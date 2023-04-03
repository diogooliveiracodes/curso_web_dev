// ARRAY
var lista = Array();
var lista = ['diogo', 'darife', 'davi', 'luis', [1, 2, 3, 4]];
// console.log(lista[1])

// OBJECT
var objeto = Object();
var objeto = {
    "chave1": 'este é o valor do objeto',
    "chave2": 'este é o valor do objeto 2',
    "outraLista": ['lucas', 'mariana', 'samuel', 'zé', [5, 3, 12, {
        "chave3": 'valor da chave 3'
    }]]
};

// objeto.push('novo valor') // não funciona !!!!!

// console.log(objeto.lista[1]);
// console.log(objeto.chave1);
// console.log(objeto.outraLista[4][3].chave3)


// ======================= PUSH =======================
// console.log(lista)
// lista.push('novo valor')
// lista.push('novo valor')
// lista.push('novo valor')
// console.log(lista)

// var lista2 = [];
// console.log(lista2);
// lista2.push('novo valor');
// console.log(lista2);

// ======================= POP =======================
// var lista = ['diogo', 'darife', 'davi', 'luis', [1, 2, 3, 4]];
// console.log(lista)
// lista.pop()
// lista.pop()
// // lista[4].pop();
// console.log(lista)

// ======================= SHIFT =======================
// var lista = ['diogo', 'darife', 'davi', 'luis', [1, 2, 3, 4]];
// console.log(lista)
// console.log(lista[0]) // [0 = diogo]
// lista.shift()
// console.log(lista)
// console.log(lista[0]) // [0 = darife]

// ======================= UNSHIFT =======================
// var lista = ['diogo', 'darife', 'davi', 'luis'];
// console.log(lista);
// console.log(lista[0]);

// lista.unshift('natalia');
// console.log(lista);
// console.log(lista[0]);

// ======================= SPLICE =======================
// var lista = ['diogo', 'darife', 'davi', 'luis'];
// console.log(lista);

// // primeiro parametro é o indice
// // segundo parametro é a quantidade de itens que serão removidos
// // terceiro parametro em diante são os itens que serão adicionados
// lista.splice(1, 2, 'natalia', 'samuel', 'lucas');
// console.log(lista);

// ======================= CONCAT =======================
// var alunos = ['samuel', 'darife', 'davi', 'luis'];
// var professores = ['natalia', 'diogo'];
// console.log(alunos);
// console.log(alunos[4]);

// alunos = alunos.concat(professores);
// console.log(alunos);
// console.log(alunos[4]);

// alunos.push(professores);
// console.log(alunos);
// console.log(alunos[4]);

// ======================= SLICE =======================
// var alunos = ['samuel', 'darife', 'davi', 'luis'];

// console.log(alunos);
// console.log(alunos.slice(1, 3));

// ======================= SORT =======================
// REORDENA OS OBJETOS DO ARRAY EM ORDEM ALFABÉTICA
// var alunos = ['samuel', 'darife', 'luis', 'davi', 'amanda'];
// console.log(alunos);
// alunos.sort();
// console.log(alunos);

// var numeros = [1, 2, 3, 4, 8, 9, 10, 5, 6, 7];
// console.log(numeros);
// numeros.sort();
// console.log(numeros);

// ======================= FILTER =======================

// exemplo 01
var alunos = ['samuel', 'darife', 'luis', 'davi', 'amanda'];

var listaFiltrada = alunos.filter(function(elemento){
    return elemento == 'samuel';
})

// console.log(listaFiltrada);

// exemplo 02
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var listaFiltrada = numeros.filter(function(elemento){
    return (elemento >= 4 && elemento <= 7); // precisa retornar true ou false
});
// console.log(listaFiltrada);

// exemplo 03
var lista = ['diogo', 5, 'davi', 'luis', [1, 2, 3, 4]];

function filtrarStrings(elemento){
    if (typeof(elemento) == 'string'){
        return true;
    } else if (typeof(elemento) == 'number'){
        return true;
    } else {
        return false;
    }
}

var listaFiltrada = lista.filter(filtrarStrings);
// console.log(listaFiltrada);

// esemplo 04
var lista = ['diogo', 5, 'davi', 'luis', [1, 2, 3, 4]];
// console.log(lista.filter((el)=> typeof(el) == 'string'));

// ======================= MAP =======================
// percorre cada elemento do array e retorna um novo array com os elementos modificados
var lista = ['diogo', 5, 'davi', 'luis', [1, 2, 3, 4]];

var listaMapeada = lista.map(function(el){
    if(typeof(el) == 'string'){
        return el.toUpperCase();
    } else if (typeof(el) == 'number'){
        return el * 10;
    } else if (typeof(el) == 'object'){
        return el.slice(1, 3)
    }
    return el;
});
// console.log(listaMapeada);

// ======================= REDUCE =======================
var lista = ['diogo', 5, 'davi', 'luis', [1, 2, 3, 4]];
var listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var elementoReduzido = listaNumeros.reduce(function(acumulador, elemento){
    return acumulador + elemento;
});

console.log(elementoReduzido);






