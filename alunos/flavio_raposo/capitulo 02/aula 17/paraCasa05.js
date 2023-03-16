class Pessoa {
    nome; sobrenome; cpf
}

class Aluno extends Pessoa{
    matricula; curso

    verificarAprovacao(nota){
        if (nota >= 7) {
            return 'Aprovado'
        }
        return 'Reprovado'
    }
}

class Professor extends Pessoa {
    disciplina; formacao

    calcularMedia(notas){
        var soma = 0
        
        for (var i = 0; i<notas.length; i++) {
            soma = soma + notas[i]   
        }
        return 'A média calcula é: '+ soma / notas.length
    }
}

var pessoa1 = new Pessoa
pessoa1.nome = 'Flavio'
pessoa1.sobrenome = 'Raposo'
pessoa1.cpf = '07283764666'
console.log(pessoa1)

var aluno1 = new Aluno 
aluno1.nome = pessoa1.nome
aluno1.sobrenome = pessoa1.sobrenome
aluno1.cpf = pessoa1.cpf
aluno1.matricula = 123
aluno1.curso = 'Programador Web'
console.log(aluno1)

var professor1 = new Professor
professor1.nome = 'Diogo'
professor1.sobrenome = 'Oliveira'
professor1.cpf = '11111111111'
professor1.disciplina = 'Javascript'
professor1.formacao = 'Desenvolvedor'
console.log(professor1)

console.log(aluno1.verificarAprovacao(5))
console.log(professor1.calcularMedia([5,10]))