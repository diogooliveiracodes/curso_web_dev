class Produto {
    nome; preco; codigoBarras
}

class ProdutoPerecivel extends Produto{
    dataDeValidade

    estaVencido(dataDeValidade) {
        var divideDataDeValidade = dataDeValidade.split('/');
        var dia = parseInt(divideDataDeValidade[0], 10);
        var mes = parseInt(divideDataDeValidade[1], 10);
        var ano = parseInt(divideDataDeValidade[2], 10);
        var dataFormatada = new Date(ano,mes -1,dia);
        var dataAtual = new Date();
        
        if (dataAtual > dataFormatada) {
            
            return true
        }
        
        return false

    }

}

var produto1 = new ProdutoPerecivel

console.log(produto1.estaVencido('10/03/2023'));