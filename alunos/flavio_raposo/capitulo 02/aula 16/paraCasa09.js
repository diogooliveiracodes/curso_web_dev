function adicionarElemento(lista, elemento){
    lista.push(elemento)
    return lista
}

lista = ['Uno','Palio','Gol']
adicionarElemento(lista, 'Sandero');
console.log(lista);