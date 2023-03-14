function concatenarStrings (string1, string2) {
    if (typeof(string1) !== 'string' || typeof(string2) !== 'string') {
        return 'Os parâmetros informados não são strings.'
    }

    return string1 + string2
}

console.log(concatenarStrings('Flavio ', 'Raposo'));