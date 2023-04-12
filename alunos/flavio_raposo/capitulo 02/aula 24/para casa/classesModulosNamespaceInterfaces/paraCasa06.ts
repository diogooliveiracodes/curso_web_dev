// Crie uma classe chamada "Venda" que tenha as propriedades "cliente", "vendedor", "valorTotal", "comissaoVendedor" e "itens". 
// A propriedade "cliente" deve ser um objeto do tipo "Cliente
// A propriedade "vendedor" deve ser um objeto do tipo "Funcionario". 
// A propriedade "valorTotal" deve ser um número. 
// A propriedade "comissaoVendedor" deve ser um número. 
// A propriedade "itens" deve ser um ARRAY de objetos do tipo "Produto".

class Venda {
    public cliente: Cliente;
    public vendedor: Funcionario;
    public valorTotal: number;
    public comissaoVendedor: number;
    public itens: Produto[];
    
        constructor(cliente: Cliente, vendedor: Funcionario, valorTotal: number, comissaoVendedor: number, itens: Produto[]){
            this.cliente = cliente;
            this.vendedor = vendedor;
            this.valorTotal = valorTotal;
            this.comissaoVendedor = comissaoVendedor;
            this.itens = itens;
        }
}