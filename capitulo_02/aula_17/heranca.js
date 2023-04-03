// FORMA

class Bolo {
    //propriedades
    nome
    peso
    tamanho

    //metodos
    imprimeNome(){
        console.log(this.nome)
    }
    cortarBolo(fatia){
        this.peso -= fatia
        console.log(this.peso)
    }
}

class BoloCenoura extends Bolo {
    quantidadeCenoura
}

class BoloChocolate extends Bolo {
    quantidadeChocolate
}

var bolinhoDaVovo = new BoloCenoura;
bolinhoDaVovo.nome = "Bolinho de Cenoura da Vovó Juju"
bolinhoDaVovo.quantidadeCenoura = 50
// bolinhoDaVovo.imprimeNome()

var meuBolo = new BoloChocolate;
meuBolo.nome = "Meu bolo de chocolate"
meuBolo.quantidadeChocolate = 150
// meuBolo.imprimeNome()

console.log(bolinhoDaVovo)
console.log(meuBolo)