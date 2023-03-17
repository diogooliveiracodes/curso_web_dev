class Animal {
    nome
    idade
    //serve para setar valores das propriedades da classe
    setNomeIdade(parametro1, parametro2) {
        this.nome = parametro1
        this.idade = parametro2
    }
    //serve para retornar valores das propriedades da Classe
    getNomeIdade() {
        console.log('nome: '+this.nome+' idade: '+this.idade)
        // return this.nome
    }
}

class Cachorro extends Animal{
    late() {
        console.log('Au Au')
    }
}

class Gato extends Animal{
    mia() {
        console.log('Miau')
    }
}

//instanciar as classes

var cachorro = new Cachorro
// cachorro.nome = 'Biriba'
cachorro.setNomeIdade('Biriba', 2)
cachorro.getNomeIdade()
cachorro.late()


var gato = new Gato
gato.setNomeIdade('Piruleibe', 1)
gato.getNomeIdade()
gato.mia()