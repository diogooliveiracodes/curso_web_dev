// - Crie uma classe "Produto" com as propriedades nome, preço e código de barras. 
// Em seguida, crie uma classe "ProdutoPerecivel" que herde de "Produto" e adicione a 
// propriedade data de validade. Adicione também um método "estaVencido" que retorna 
// verdadeiro se o produto estiver vencido e falso caso contrário.

class Produto {
    nome; preco; codigoBarras
}

class ProdutoPerecivel extends Produto {
    anoValidade
    estaVencido(anoAtual){
        // if(this.anoValidade < anoAtual) return ('Está Vencido')
        if(this.anoValidade < anoAtual) console.log('Está Vencido')
    }
}

var queijo = new ProdutoPerecivel
queijo.anoValidade = 2021
queijo.estaVencido(2023)