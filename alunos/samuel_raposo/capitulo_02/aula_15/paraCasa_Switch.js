// SWITCH
// Crie 5 exercícios usando switch em javascript
// 1 - Crie um algoritmo que receba um dia da semana e diga se é dia útil ou final de semana.
// 2 - Crie um algoritmo que receba um mês e diga quantos dias ele tem.
// 3 - Crie um algoritmo que receba um mês e diga em qual trimestre ele está.
// 4 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo.
// 5 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo ignorando os espaços

//1. 
var diaDaSemana = 'segunda-feira'
switch (diaDaSemana) {
  case "segunda-feira":
  case "terça-feira":
  case "quarta-feira":
  case "quinta-feira":
  case "sexta-feira":
    console.log("Dia útil");
    break;
  case "sábado":
  case "domingo":
    console.log("Final de semana");
    break;
  default:
    console.log("Dia inválido");
}

//2.
let mes = prompt("Informe o Mês: ")
switch (mes){
  case 'janeiro':
  case 'março':
  case 'maio':
  case 'julho':
    console.log(" Este mês tem 31 dias.");
    break;
  case 'fevereiro':
  case 'abril':
  case 'junho':
  case 'setembro':
    console.log(" Este mês tem 30 dias ");
    break;
  default:
    console.log("Dados Inválidos ");  
}

//3.
{
  let meses = prompt("Digite qual mês deseja saber:")
    switch (meses) {
      case 'Janeiro':
      case 'Fevereiro':
      case 'Março':
        console.log(meses + " Está no Primeiro Trimestre");
        break; 
      case 'Abril':
      case 'Maio':
      case 'Junho':
        console.log(meses + " Esta no Segundo Trimestre");
        break;
      case 'Julho':
      case 'Agosto':
      case 'Setembro':
        console.log(meses + " Esta no Terceiro Trimestre");
        break;
      case 'Outubro':
      case 'Novembro':
      case 'Dezembro':
        console.log(meses + " Esta no Quarto Trimestre, ou Segundo Semestre do ano");
        break;
      default:
        console.log(" Dados informados fora do escopo, digite novamente." + "\n"+ "   Considere-se, antenar em letras maiúsculas, caracteres especiais, e espaços em branco: ");
    }  
}

//4.
{
  let palavra = prompt("Digite a palavra desejada: ")
  let resultado
  switch (palavra){
    case palavra.split("").reverse().join(""):
      resultado = "É um Palíndromo"
      break;
    default:
      resultado = "Não é um palíndromo"
  }
  console.log(resultado);
}

//5.
 {   let palavra = prompt("Digite a palavra Desejada: ")
    let palavraSemEspacos = palavra.replace(/\s/g, "");
    let resultado;

   switch (palavraSemEspacos){
     case palavraSemEspacos.split("").reverse().join(""):
       resultado = "É um Palíndromo";
       break;
     default:
       resultado = "Não é um palíndromo";
   }
   console.log(resultado);
 }