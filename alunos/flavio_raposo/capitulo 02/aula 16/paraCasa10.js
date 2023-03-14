function verificarPalindromo (palavra) {
palavraSemEspaco = palavra.replace(" ","");    
palavraInvertida = palavraSemEspaco.split("").reverse().join("")
    if (palavraInvertida == palavraSemEspaco) {
        return true
    }

    return false
}

console.log(verificarPalindromo('subi no onibus'));