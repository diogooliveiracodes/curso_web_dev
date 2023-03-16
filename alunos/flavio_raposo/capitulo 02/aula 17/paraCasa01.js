class Animal {
    nome
    tipo
}

class Cachorro extends Animal {
    raca
    idade

    latir() {
     
      return 'Au Au'
    }
}

var dog = new Cachorro
console.log(dog.latir());