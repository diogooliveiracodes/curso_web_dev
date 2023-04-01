export default interface ColaboradorInterface {
    nome: string;
    idade: number;
    codigoFuncionario: number;
    passouAno(): void;
    setCpf(cpf: number): void;
    getCodigoFuncionario(): void;
}