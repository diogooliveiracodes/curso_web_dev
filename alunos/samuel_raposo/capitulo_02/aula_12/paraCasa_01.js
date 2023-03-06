// 1. Crie uma lista com 5 ítens
    var lista = [`Samuel`, `Sabrina`, `Helena`, `Denia`, `Antonio`, `Marielle`]
    console.log (lista)

// 2. Atribua novos valores a lista
    lista[0] = `Samuel Raposo`, lista[1] = `Sabrina Mairink`

// 3. Imprima a lista no console
    console.log(lista)

// 4. Imprima a quantidade de ítens da lista
    console.log(lista.length)

// 5. Imprima o índex do ítem de índice 3 da sua lista utilizando o valor atribuído a ele
    lista[3] = lista[3] + " Junia"
    console.log(lista[3])

// 6. Crie uma nova lista e adicione a lista anterior como um ítem dela
    var lista2 = [lista]

// 7. Imprima a primeira lista através da segunda lista
    console.log(lista2)


// 08.1
var funcionarios = {
    samuel: 'Infra.Ti',
    danielFer: 'Gerente de T.i',
    danielOliver: 'Programador ADVPL',
    edvan: 'Suporte de T.i',
    endEmpresa: {
      rua: 'Av. Dr Emilio de Vasconcelos',
      numero: 45,
    },
    cidadesLojas: ['Sete Lagoas, ', 'Venda Nova', 'Contagem', 'Betim, ', 'Montes Claros, ', 'Patos de Minas. ']
  }
  
  /*console.log(funcionarios)*/
    //8.2
    funcionarios.samuel = 'Suporte de Infraestrutura'
    funcionarios.endEmpresa.bairro = 'Centro'
  
    //8.3
    //console.log(funcionarios)//
  
    //8.4
    console.log('A Quantidade de itens na lista é de: '+ Object.keys(funcionarios).length)