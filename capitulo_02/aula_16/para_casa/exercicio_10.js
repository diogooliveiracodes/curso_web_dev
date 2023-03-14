// 10. Crie uma função em JavaScript chamada "verificarPalindromo" que recebe um parâmetro string, "palavra", 
// e verifica se a palavra é um palíndromo (ou seja, se ela pode ser lida da mesma forma de trás para frente). 
// Retorne true se for um palíndromo e false caso contrário.

function verificarPalindromo(palavra) {
    var resultado = palavra.split("").reverse().join("")
    if(resultado == palavra) {
        return true
    }
    return false
}

console.log(verificarPalindromo('arara'))