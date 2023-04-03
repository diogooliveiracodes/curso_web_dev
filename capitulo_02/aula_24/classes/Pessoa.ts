class Pessoa {
    //atributos (acessado através do "this.")
    public nome: string;
    public idade: number;
    private cpf?: number;

    //método construtor
    constructor(nome: string, idade: number, cpf?: number) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    //métodos (função dentro de uma classe)
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

// let diogo = new Pessoa('Diogo', 32, 123456);
// // diogo.fazerAniversario()
// diogo.passouAno()
// diogo.getCpf()

// ==================== Herança ====================
class Colaborador extends Pessoa {
    public codigoFuncionario: number;

    constructor(nome: string, idade: number, cpf?: number, 
        codigoFuncionario: number = 1) {
        super(nome, idade, cpf);
        this.codigoFuncionario = codigoFuncionario;
    }

    public getCodigoFuncionario(): void {
        console.log(this.codigoFuncionario);
    }
}

class Cliente extends Pessoa {
    constructor(nome: string, idade: number, cpf?: number) {
        super(nome, idade, cpf);
    }
}

let diogo = new Colaborador('Diogo', 32, 123456, 999);
let joao = new Cliente('João', 19, 321654);
let maria = new Pessoa('Maria', 27);
// maria.setCpf(123456789);
// maria.getCpf();

// maria.getCodigoFuncionario(); //erro
diogo.getCodigoFuncionario();
// console.log(diogo.codigoFuncionario)
// joao.getCodigoFuncionario(); // erro