  // 1. Crie uma lista com 5 ítens
  {
    var lista = ['Samuel', 'Sabrina', 'Helena', 'Denia', 'Antonio', 'Marielle'];
      console.log(lista);
  
    // 2. Atribua novos valores a lista
    lista[0] = 'Samuel Raposo'
    lista[3] = 'Denia Junia'
    // 3. Imprima a lista no console
      console.log(lista)
  
   // 4. Imprima a quantidade de ítens da lista
     console.log("A lista contem: " + lista.length + " itens") 
  
    // 5. Imprima o índex do ítem de índice 3 da sua lista utilizando o valor atribuído a ele
    lista.indexOf('Denia Junia')
    console.log("Este item, é de index: "+ lista.indexOf('Denia Junia'))
  }
  
  // 6. Crie uma nova lista e adicione a lista anterior como um ítem dela
  {  var lista2 = [];
          lista2.push(lista)
   // 7. Imprima a primeira lista através da segunda lista
    console.log(lista2[0])
  }
  
  // 8. Repita os exercícios anteriores agora utilizando Objetos (menos o 3, 6, 7)
    // 8.1 Crie um Objeto com 5 ítens
  {
  var objeto = {
      samuel: "Desenv.Front",
      danielOliver: "Desenv.ADVPL",
      darife: "Gestor",
      edvan: "Suporte TI",
      luis: "Infra"
    };
  
    //8.2. Atribua novos valores ao objeto
    objeto.samuel = 'Full Stack'
  
    //8.3 Imprima o Objeto no console
    console.log(objeto)
  
    //8.4 Imprima a quantidade de ítens do Objeto
   console.log("Este Objeto possui "+Object.keys(objeto).length+" ítens")
    
  }