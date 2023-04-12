class Carrinho {
    public itens: Produto[];
    public cliente: Cliente;
    
    constructor(itens: Produto[] ,cliente: Cliente) {
        this.itens = itens;
        this.cliente = cliente;
    }
}