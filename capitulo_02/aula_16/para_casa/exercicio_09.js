// 9. Crie uma função em JavaScript chamada "adicionarElemento" que recebe dois parâmetros, 
// "array" e "elemento", e adiciona o elemento ao final do array.

function adicionarElemento(lista, elemento) {
    lista.push(elemento)
    return lista
}

lista = ['maria', 'joão', 'pedro']
console.log(lista)

// alterou a lista
adicionarElemento(lista, 'Diogo')
adicionarElemento(lista, 'nat')
console.log(lista)