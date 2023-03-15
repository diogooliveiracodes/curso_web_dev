// 8. Crie uma função em JavaScript chamada "calcularIMC" que recebe dois parâmetros numéricos, 
// "peso" e "altura", e retorna o índice de massa corporal (IMC) da pessoa.

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura)
    if(imc < 18.5){
        return 'Abaixo do peso normal'
    }
    if(imc >18.5 && imc < 24.9){
        return 'Peso normal'
    }
    if(imc >25 && imc < 29.9){
        return 'Excesso de peso'
    }
    return 'Obesidade'
}

console.log(calcularIMC(78, 1.69))