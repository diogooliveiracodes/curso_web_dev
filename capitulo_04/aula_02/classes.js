class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibir() {
        console.log(`Nome: ${this.nome} - Idade: ${this.idade}`);
    }
}

export default Aluno;