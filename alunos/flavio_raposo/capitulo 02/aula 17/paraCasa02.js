class Pessoa {
    nome; idade; genero
}

class Funcionario extends Pessoa {
    cargo

    apresentar(){
        return 'Olá '+this.nome+ 'tudo bem?! Sua idade é '+this.idade+ ' anos.'
    }
}

var func = new Funcionario
func.nome = 'Flavio Raposo '
func.idade = 35
console.log (func.apresentar());