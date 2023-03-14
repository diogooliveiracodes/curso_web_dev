function verificarParImpar (numero) {
    if ((numero%2) !=0) {
        return 'O número '+numero+' é ímpar.'
    }

    return 'O número '+numero+' é par.'
}

console.log(verificarParImpar(51));