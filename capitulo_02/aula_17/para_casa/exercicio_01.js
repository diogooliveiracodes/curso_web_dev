// - Crie uma classe "Animal" com as propriedades nome e tipo. Em seguida, crie uma classe 
// "Cachorro" que herde de "Animal" e adicione as propriedades raça e idade. Adicione também um 
// método "latir" que retorna o som que o cachorro faz.

class Animal {
    nome; tipo
}

class Cachorro extends Animal {
    raca; idade
    latir() {
        console.log('Au Au')
    }
}

var lola = new Cachorro
lola.latir()