class Clientes extends Pessoas {
    public cpf: number;

    constructor (nome: string, idade: number, cpf:number) {
        super (nome, idade)
        this.cpf = cpf;
    }
}