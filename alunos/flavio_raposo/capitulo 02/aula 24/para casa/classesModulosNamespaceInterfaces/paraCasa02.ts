class Funcionarios extends Pessoas {
    public salario: number;

    constructor(nome: string, idade: number, salario: number) {
        super(nome, idade);
        this.salario = salario;
    }

}