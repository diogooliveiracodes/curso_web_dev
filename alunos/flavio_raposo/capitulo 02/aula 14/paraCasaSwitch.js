//Para Casa 01

var diaDaSemana = 'Sexta';

switch (diaDaSemana) {
    case 'Domingo':
        console.log(diaDaSemana + ' é final de semana');
    break;
    case 'Segunda':
        console.log(diaDaSemana + ' é dia útil.');
    break;
    case 'Terça':
        console.log(diaDaSemana + '  é dia útil.');
    break;
    case 'Quarta':
        console.log(diaDaSemana + ' é dia útil.');
    break;
    case 'Quinta':
        console.log(diaDaSemana + ' é dia útil.');
    break;
    case 'Sexta':
        console.log(diaDaSemana + ' é dia útil, mas só até as 18:00hs. Depois disso SEXTOU e começam os trabalhos do final de semana.');
    break;
    case 'Sabado':
        console.log(diaDaSemana + ' é final de semana');
    break;
    default:
        console.log('Dia da semana não reconhecido. Gentileza digitar sem espaços e acentuação e sem a palavra feira. Além disso, digitar a inicial maiúscula.')
}

//Para Casa 02

var mes = 'Maio';

switch(mes) {
  case 'Janeiro':
    console.log('O mês de '+ mes+ ' tem 31 dias.');
    break;
  case 'Fevereiro':
    console.log('O mês de '+mes+ ' tem 28 ou 29 dias.');
    break;
  case 'Março':
     console.log('O mês de '+ mes+ ' tem 31 dias.');
    break
  case 'Abril':
     console.log('O mês de '+ mes+ ' tem 30 dias.');
    break;
  case 'Maio':
     console.log('O mês de '+ mes+ ' tem 31 dias.');
    break;
  case 'Junho':
     console.log('O mês de '+ mes+ ' tem 30 dias.');
    break;  
  case 'Julho':
     console.log('O mês de '+ mes+ ' tem 31 dias.');
    break;  
  case 'Agosto':
     console.log('O mês de '+ mes+ ' tem 31 dias.');
    break;
  case 'Setembro':
     console.log('O mês de '+ mes+ ' tem 30 dias.');
    break;
  case 'Outubro':
     console.log('O mês de '+ mes+ ' tem 31 dias.');
    break;
  case 'Novembro':
     console.log('O mês de '+ mes+ ' tem 30 dias.');
    break;
  case 'Dezembro':
     console.log('O mês de '+ mes+ ' tem 31 dias.');
    break;  
  default:
    console.log('Mês inválido. Digite o mês com a inicial maiúscula.')
}

//Para Casa 03
var mes = 'Maio';

switch(mes) {
  case 'Janeiro':
    console.log('O mês de '+ mes+ ' pertence ao primeiro trimestre.');
    break;
  case 'Fevereiro':
    console.log('O mês de '+mes+ ' pertence ao primeiro trimestre.');
    break;
  case 'Março':
     console.log('O mês de '+ mes+ ' pertence ao primeiro trimestre.');
    break
  case 'Abril':
     console.log('O mês de '+ mes+ ' pertence ao segundo trimestre.');
    break;
  case 'Maio':
     console.log('O mês de '+ mes+ ' pertence ao segundo trimestre.');
    break;
  case 'Junho':
     console.log('O mês de '+ mes+ ' pertence ao segundo trimestre.');
    break;  
  case 'Julho':
     console.log('O mês de '+ mes+ ' pertence ao terceiro trimestre.');
    break;  
  case 'Agosto':
     console.log('O mês de '+ mes+ ' pertence ao terceiro trimestre.');
    break;
  case 'Setembro':
     console.log('O mês de '+ mes+ ' pertence ao terceiro trimestre.');
    break;
  case 'Outubro':
     console.log('O mês de '+ mes+ ' pertence ao quarto trimestre.');
    break;
  case 'Novembro':
     console.log('O mês de '+ mes+ ' pertence ao quarto trimestre.');
    break;
  case 'Dezembro':
     console.log('O mês de '+ mes+ ' pertence ao quarto trimestre.');
    break;  
  default:
    console.log('Mês inválido. Digite o mês com a inicial maiúscula.')
}

//Para Casa 04

var palavra= 'arara';
var palavraInvertida = palavra.split("").reverse().join("");
if (palavra === palavraInvertida){
  console.log('A palavra '+palavra+ ' é um palíndromo.')
} else {
  console.log('Não é palíndromo.')
}

//Para Casa 05
var palavra = 'subi no onibus';
var palavraSemEspaco = palavra.replace(" ","");
var palavraInvertida = palavraSemEspaco.split("").reverse().join("");

if (palavraSemEspaco === palavraInvertida){
  console.log('A palavra '+palavra+ ' é um palíndromo.')
} else {
  console.log('Não é palíndromo.')
}


