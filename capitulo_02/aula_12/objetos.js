var pessoa = {
    nome: 'Diogo',
    sobrenome: 'Oliveira',
    idade: 32,
    endereco: {
      rua: 'Viena',
      numero: 256
    },
    pets: ['Lola', 'Toninho', 'Piruleibe']
  }
  
  //atribuindo novos valores aos ítens do objeto
  pessoa.idade = 33;
  pessoa.profissao = 'Programador'
  pessoa.endereco.bairro = 'Jardim Europa'
  pessoa.pets.push('Novo Bichinho')
  // console.log(pessoa)
  
  
  var pessoa2 = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 28,
    endereco: {
      rua: 'Londres',
      numero: 123
    },
    pets: ['bilu']
  }
  
  var pessoa3 = {
    nome: 'Pedro',
    sobrenome: 'Alves',
    idade: 16,
    endereco: {
      rua: 'Madri',
      numero: 321
    },
    pets: ['gatinho']
  }
  
  var pessoas = [pessoa, pessoa2, pessoa3]
  
  for ( i = 0 ; i < pessoas.length; i++) {
    if (pessoas[i].idade > 18){
      console.log(pessoas[i].nome + ' é maior de idade.')
    } else {
      console.log(pessoas[i].nome + ' é menor de idade.')
    }
  }
  
  // contar o número de ítens
  // console.log(Object.keys(pessoa).length)
  // contar o número de objetos na lista pets
  // console.log(pessoa.pets.length)
  // console.log(pessoa.nome) //imprime o nome:
  // console.log(pessoa.endereco.rua) //imprime a rua:
  // console.log(pessoa.pets[2]) //imprime o piruleibe