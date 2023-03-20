// - Crie uma classe "Veiculo" com as propriedades marca, modelo e ano. Em seguida, crie uma classe 
// "Carro" que herde de "Veiculo" e adicione as propriedades cor e placa. Adicione também métodos get e set 
// para as propriedades cor e placa.

class Veiculo {
    marca; modelo; ano
}

class Carro extends Veiculo{
    cor; placa
    setCor(parametro) {
        this.cor = parametro
    }
    getCor() {
        return this.cor
        // console.log(this.cor)
    }
    setPlaca(parametro) {
        this.placa = parametro
    }
    getPlaca() {
        // return this.placa
        console.log(this.placa)
    }
}

var gol = new Carro
gol.setCor('Vermelho')
gol.setPlaca(123456)
// gol.getCor()
gol.getPlaca()

// var corDoGol = gol.getCor()
// console.log(corDoGol)

console.log(gol.getCor())