// - Crie uma classe "Pessoa" com as propriedades "nome", "sobrenome" e "cpf". Em seguida, crie duas classes que herdem de 
// "Pessoa": "Aluno" e "Professor".

// - Na classe "Aluno", adicione as propriedades "matricula" e "curso" e um método "verificarAprovacao" que receba uma nota 
// como parâmetro e retorne "Aprovado" se a nota for maior ou igual a 7 e "Reprovado" caso contrário.

// - Na classe "Professor", adicione as propriedades "disciplina" e "formacao" e um método "calcularMedia" que receba um array 
// de notas como parâmetro e retorne a média das notas.

// - Crie objetos de cada uma das classes "Pessoa", "Aluno" e "Professor" e preencha as propriedades com valores fictícios.

// - Utilize os métodos das classes "Aluno" e "Professor" para verificar a aprovação do aluno e calcular a média das notas 
// do professor, respectivamente.

// - Exiba as informações das pessoas criadas no console, incluindo as propriedades e métodos das classes "Aluno" e "Professor".

class Pessoa {
    constructor(nome, sobrenome, cpf) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome, cpf, matricula, curso) {
        super(nome, sobrenome, cpf)
        this.matricula = matricula
        this.curso = curso
    }
    verificarAprovacao(nota){
        return nota>=7 ? 'Aprovado' : 'Reprovado'
    }
}

class Professor extends Pessoa {
    constructor(nome, sobrenome, cpf, disciplina, formacao) {
        super(nome, sobrenome, cpf)
        this.disciplina = disciplina
        this.formacao = formacao
    }
    calcularMedia(notas = []) {
        var resultado = 0
        for(var i = 0; i<notas.length; i++){
            // console.log(notas[i])
            resultado += notas[i]
        }
        return resultado / notas.length
    }
}

// ( 2 + 4 + 6 ) / 3

var aluno1 = new Aluno('Joao', 'Oliveira', 123, 111, 'Programação')
var aluno2 = new Aluno('Maria', 'Silva', 321, 112, 'Inglês')
var professor1 = new Professor('Diogo', 'Oliveira', 123, 'Programação', 'ADS')
var professor2 = new Professor('Natália', 'Ribeiro', 122, 'Programação', 'ADS')


console.log(aluno1)
console.log(aluno1.verificarAprovacao(8))

console.log(aluno2)
console.log(aluno2.verificarAprovacao(3))

console.log(professor1)
console.log(professor1.calcularMedia([2, 4, 6, 3, 7]))

console.log(professor2)
console.log(professor2.calcularMedia([2, 4, 6, 2, 3, 4, 5]))