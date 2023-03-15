// Crie uma função em JavaScript chamada "calcularIMC" que recebe dois parâmetros numéricos, "peso" e "altura",
// e retorna o índice de massa corporal (IMC) da pessoa.

// se for menos que 18,5, esta abaixo do peso
// se for maior ou igual a 18,50 e menor que 24,9, esta no peso ideal, 
// senao se for maior que 25 , esta com obesidade.

function calcularIMC(peso,altura){
    var imc = peso / (altura*altura)
    if (typeof (peso)!== 'number' || typeof(altura)!=='number'){
        return 'Verifique a tipagem dos dados informados.'
    } 
    if (imc < 18.5){
        return 'Abaixo do Peso'
    } else if (imc==18.5 && imc < 24.9){
        return 'Peso Ideal'
    } else if (imc > 25 && 29.9){
        return 'Obesidade'
    } 
}

console.log(calcularIMC(50,1.20));