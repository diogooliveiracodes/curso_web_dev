// 1 - Crie um algoritmo que receba um dia da semana e diga se é dia útil ou final de semana.

var dia = "domingo";
switch (dia) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("dia útil");
        break;
    case "sábado":
    case "domingo":
        console.log("final de semana");
        break;
        default:
            console.log("dia inválido")   
}

// 2 - Crie um algoritmo que receba um mês e diga quantos dias ele tem.

var mês = "agosto";
switch (mês) {
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        console.log("O mês tem 31 dias");
        break;
    case "abril":
    case "junho":
    case "setembdro":
    case "novembro":
        console.log("O mês tem 30 dias");
        break;
    case "fevereiro":
        console.log("O mês tem 28 dias");
        break;
        default:
            console.log("mês iválido")
    }    


// 3 - Crie um algoritmo que receba um mês e diga em qual trimestre ele está.

var mês = "agosto";
switch (mês) {
    case "janeiro":
    case "fevereiro":
    case "março":
        console.log("1º trimestre");
        break;
    case "abril":
    case "maio":
    case "junho":
        console.log("2º trimestre");
        break;
    case "julho":
    case "agosto":
    case "setembdro":
        console.log("3º trimestre");
        break;
    case "outubro":    
    case "novembro":
    case "dezembro":
        console.log("4º trimestre");
        break;
           default:
            console.log("mês iválido")
    }    



// 4 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo.

var palavra = "uau";
var palavraInversa = palavra.split("").reverse().join|("");
if (palavra === palavraInversa) {
    console.log("a palavra é um palíndromo");
} else {
    console.log("a palavra não é um palídromo");
}



