export default interface PessoaInterface {
    nome: string;
    idade: number;
    passouAno(): void;
    setCpf(cpf: number): void;
}