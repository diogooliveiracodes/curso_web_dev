// 6. Crie uma função em JavaScript chamada "calculaIdade" que recebe um parâmetro numérico, 
//"anoNascimento", e retorna a idade da pessoa com base no ano atual. 
// Considere que a pessoa nasceu no dia 1º de janeiro.

function calculaIdade(anoNascimento){
    var anoAtual = 2023
    return anoAtual - anoNascimento;
}
console.log(calculaIdade(1959));
