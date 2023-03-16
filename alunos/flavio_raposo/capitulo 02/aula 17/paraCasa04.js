class Veiculo{
    marca; modelo; ano
}

class Carro extends Veiculo {
    cor; placa

    setCor(cor){
       return this.cor = cor
    }

    getCor(){
        return this.cor
    }

    setPlaca(placa) {
        return this.placa = placa
    }

    getPlaca(){
        return this.placa
    }
}

var sandero = new Carro
sandero.cor = 'Prata'
sandero.placa = 'QPT0D29'

console.log('A cor do Sandero é '+sandero.getCor());
console.log('A placa do Sandero é '+sandero.getPlaca());