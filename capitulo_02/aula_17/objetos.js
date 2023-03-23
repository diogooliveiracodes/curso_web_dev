// BOLO

var bolo = {
    ingredientesBase: ['farinha', 'ovo'],

    //metodos
    // imprimeNome(){
    //     console.log(this.nome)
    // },
    // cortarBolo(fatia){
    //     this.peso -= fatia
    //     console.log(this.peso)
    // }
}

var boloChocolate = {
    nome: 'Bolo de Chocolate',
    peso: 150,
    tamanho: 15,
    ingredienteExtra: 'chocolate',
    imprimeNome(){
        console.log(this.nome)
    },
    cortarBolo(fatia){
        this.peso -= fatia
        console.log(this.peso)
    }
}

var boloCenoura = {
    //propriedades
    nome: 'Bolo de Cenoura',
    peso: 200,
    tamanho: 20,
    ingredienteExtra: 'cenoura',
    imprimeNome(){
        console.log(this.nome)
    },
    cortarBolo(fatia){
        this.peso -= fatia
        console.log(this.peso)
    }
}

// boloCenoura.nome
// boloCenoura.imprimeNome()
boloCenoura.cortarBolo(50)
boloCenoura.cortarBolo(30)
boloCenoura.cortarBolo(40)