// INTERFACE
class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
    imprimeNome(){
        console.log(this.nome)
    }
}

// herança
class Vendedor extends Pessoa {
    constructor(nome, sobrenome, idade, codigo){
        super(nome, sobrenome, idade)
        this.codigo = codigo
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, idade, renda){
        super(nome, sobrenome, idade)
        this.renda = renda
    }
}

var vendedor1 = new Vendedor('Bia', 'Pereira', 43, 444) 
var vendedor2 = new Vendedor('João', 'Carlos', 25, 123) 
var cliente1 = new Cliente('Maria', 'Joaquina', 22, 1800)

// vendedor1.imprimeNome()
// console.log(vendedor1)
// console.log(vendedor2)
console.log(cliente1)


//=================================================
// NÃO É O PADRÃO MAS FUNCIONA
// class Pessoa {
//     constructor(nome, sobrenome, idade){
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.idade = idade
//     }
// }

// class Vendedor extends Pessoa {
//     constructor(nome, sobrenome, idade, codigo) {
//         super(nome, sobrenome, idade)
//         this.codigo = codigo
//     }
// }

// class Cliente extends Pessoa{
//     renda
//     veiculo
// }

// var vendedor1 = new Vendedor('Bia', 'Pereira', 43, 444) 
// var vendedor2 = new Vendedor('João', 'Carlos', 25, 123) 

// console.log(vendedor1)
// console.log(vendedor2)

// =================================================
// var diogo = new Pessoa('Diogo', 'Oliveira', 32)
// var pedrinho = new Pessoa('Pedro', 'Silva', 22)

// console.log(diogo)
// console.log(pedrinho)