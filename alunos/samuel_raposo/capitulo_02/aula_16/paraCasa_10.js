//Crie uma função em JavaScript chamada "verificarPalindromo" que recebe um parâmetro string, "palavra",
//e verifica se a palavra é um palíndromo (ou seja, se ela pode ser lida da mesma forma de trás para
//frente). Retorne true se for um palíndromo e false caso contrário.

function verificarPalindromo(palavra){
    let palavraFormat = palavra.toLowerCase().replace(/\s/g, '');
    let palavraInvertida = palavraFormat.split('').reverse().join('');
    return palavraFormat === palavraInvertida

}
console.log(verificarPalindromo('amo'));