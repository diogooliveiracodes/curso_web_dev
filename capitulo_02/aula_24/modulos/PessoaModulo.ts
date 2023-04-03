import PessoaInterface from "../interfaces/PessoaInterface";

export default class PessoaModulo implements PessoaInterface {
    public nome: string;
    public idade: number;
    private cpf?: number;

    constructor(nome: string, idade: number, cpf?: number) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    public getCpf(): void {
        console.log(this.cpf);
    }

    public setCpf(cpf: number): void {
        this.cpf = cpf;
    }
    
    private fazerAniversario(): void {
        this.idade++;
    }

    public passouAno(): void {
        this.fazerAniversario()
        console.log(`Feliz aniversário ${this.nome}!, 
        este ano você completa ${this.idade} anos.`)
    }
}