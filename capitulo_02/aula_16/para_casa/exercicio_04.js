// 4. Crie uma função em JavaScript chamada "concatenarStrings" que recebe dois parâmetros do tipo string, 
// "string1" e "string2", e retorna a concatenação das duas strings.

function concatenarStrings(string1, string2) {
    if(typeof(string1) != 'string' || typeof(string2) != 'string'){
        return 'Os valores inseridos não são do tipo string'
    }
    return string1 + string2
}

console.log(concatenarStrings('Olá ', 'Mundo'))