import PessoaModulo from "./PessoaModulo"
import ColaboradorInterface from "../interfaces/ColaboradorInterface";

export default class ColaboradorModulo extends PessoaModulo implements ColaboradorInterface {
        
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