// 9. Crie uma função em JavaScript chamada "adicionarElemento" 
// que recebe dois parâmetros, "array" e "elemento", e adiciona o elemento ao final do array.

function adicionarElemento(lista,elemento){
    lista.push(elemento);
    return lista
}

var lista = ['Samuel','Sabrina'];

adicionarElemento(lista,' Helena');
adicionarElemento(lista,'Logan');

console.log(lista);