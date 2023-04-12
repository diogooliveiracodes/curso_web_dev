function maiorOuIgual (a: number, b:number): String {
    if (a > b) {
        return `O número `+a+ ' é maior que o número '+b+ `.`
    }
    else if (a == b) {
        return `Os números são iguais.`
    }
    else
        return `O primeiro número é menor que o segundo.`    
}

console.log(maiorOuIgual(6,6))