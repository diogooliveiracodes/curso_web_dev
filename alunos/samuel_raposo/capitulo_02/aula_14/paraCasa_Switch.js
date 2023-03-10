/*SWITCH
Crie 5 exercícios usando switch em javascript
1 - Crie um algoritmo que receba um dia da semana e diga se é dia útil ou final de semana.
2 - Crie um algoritmo que receba um mês e diga quantos dias ele tem.
3 - Crie um algoritmo que receba um mês e diga em qual trimestre ele está.
4 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo.
5 - Crie um algoritmo que receba uma string e diga se ela é um palíndromo ignorando os espaços*/

//1.
var diaDaSemana = "a"
  switch (diaDaSemana) {
    case "Domingo":
      console.log(diaDaSemana + " é final de semana");
      break;
    case "Segunda Feira":
      console.log(diaDaSemana + " é dia util");
      break;
    case "Terça Feira":
      console.log(diaDaSemana + " é dia útil !");
      break;
    case "Quarta Feira":
      console.log(diaDaSemana + " é dia útil !");
      break;  
    case "Quinta Feira":
      console.log(diaDaSemana + " é dia útil !");
      break;  
    case "Sexta Feira":
      console.log(diaDaSemana + " papai, pode olhar ai ó ! Meiii diia, quem fez, fez, quem nao fez é só Segunda Feira !");
      break; 
    case "Sábado":
      console.log(diaDaSemana + " é Final de Semana !");
      break; 
    default:
      console.log(" Validação Case Sensitive !! \n Favor verificar a ortografia, considerando as pontuações, acentos, e letras maiúsculas ou minúsculas ")
  }

    //2.
    var mes = 'Junho'
    switch (mes) {
      case 'Janeiro':
        console.log(mes + " tem 31 dias !");
        break;
      case 'Fevereiro':
        console.log(mes + " tem 28 dias !");
        break;
      case 'Março':
        console.log(mes + " tem 31 dias !");
        break;
      case 'Abil':
        console.log(mes + " tem 30 dias !");
        break;
      case 'Maio':
        console.log(mes + " tem 31 dias !");
        break;
      case 'Junho':
        console.log(mes + " tem 30 dias, e é o mês de aniverssario de Samuel !!!!! ");
        break;
      case 'Julho':
        console.log(mes + " tem 31 dias !");
        break;
      case 'Agosto':
        console.log(mes + " tem 31 dias !");
        break;
      case 'Setembro':
        console.log(mes + " tem 30 dias !");
        break;
      case 'Outubro':
        console.log(mes + " tem 31 dias !");
        break; 
      case 'Novembro':
        console.log(mes + " tem 30 dias !");
        break;
      case 'Dezembro':
        console.log(mes + " tem 31 dias !");
        break; 
      default:
        console.log("Informe um mês do ano, válido !")
    }

    //3.
var mes = 'Janeiro';
switch(mes) {
  case 'Janeiro':
  case 'Fevereiro':
  case 'Março':
    console.log(" O mês de " + mes + " está no 1º trimestre.");
    break;
  case 'Abril':
  case 'Maio':
  case 'Junho':
    console.log(" O mês de " + mes + " está no 2º trimestre.");
    break;
  case 'Julho':
  case 'Agosto':
  case 'Setembro':
    console.log(" O mês de " + mes + " está no 3º trimestre.");
    break;
  case 'Outubro':
  case 'Novembro':
  case 'Dezembro':
    console.log(" O mês de " + mes + " está no 4º trimestre.");
    break;
  default:
    console.log(" Mês inválido ! ");
}

//4.















//5.
