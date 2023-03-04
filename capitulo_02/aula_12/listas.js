var lista = [
    false,
    'João Carlos',
    'Maria',
    'Pedro',
    (453 + 10),
    ['banana', 'maçã', 'pera'],
    { banana: 23 }
  ]
  // console.log('Quantidade de ítens: ' + lista.length)
  // console.log(lista[1]) //output 'João Carlos'
  
  //Atribuir novos valores a lista
  lista[2] = 'Maria Joaquina'
  // lista[2] = lista[2]+' Joaquina'
  lista[4] = lista[4] + 200
  // console.log(lista)
  
  //Operação básica de lista
  lista.push('Novo ítem')
  console.log(lista.indexOf('Maria Joaquina')) // extrair o índex do ítem da lista
  // console.log(lista)
  // console.log('Quantidade de ítens: ' + lista.length)


  //PARA CASA
    // 1. Crie uma lista com 5 ítens
    var lista = [ 'João Carlos', 'Maria', 'Pedro', 'João', 'Maria']
    // 2. Atribua novos valores a lista
    lista[2] = 'Pedro Henrique'
    // 3. Imprima a lista no console
    console.log(lista)
    // 4. Imprima a quantidade de ítens da lista
    console.log(lista.length)
    // 5. Imprima o índex do ítem de índice 3 da sua lista utilizando o valor atribuído a ele
    console.log(lista.indexOf('João'))
    // 6. Crie uma nova lista e adicione a lista anterior como um ítem dela
    var lista2 = [lista]
    // 7. Imprima a primeira lista através da segunda lista
    console.log(lista2[0])
    // 8. Imprima a quantidade de ítens da segunda lista
    // 9. Atribua um novo valor na primeira lista dentro da segunda lista



  
  