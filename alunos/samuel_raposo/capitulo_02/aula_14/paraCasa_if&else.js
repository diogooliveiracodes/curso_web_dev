/*- IF/ELSE
1 - Crie um algoritmo que receba um número e diga se ele é par ou ímpar.
2 - Crie um algoritmo que receba um número e diga se ele é positivo ou negativo.
3 - Crie um algoritmo que receba um número e diga se ele é maior que 10.
4 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20.
5 - Crie um algoritmo que receba um número e diga se ele é maior que 10 e menor que 20 ou se ele é 15.*/


//1. 
{    
    let numero = 8;

    if (( numero % 2 ) == 0 ){
        console.log(numero + " é um numero PAR !");
     } else {
            console.log(numero + " é um numero Impar !");
        } 
}    

   //2.
    {
    let numero = 10;
        if (numero > 0) {
            console.log(numero+ " é positivo !");
        } else {
            console.log(numero + " é negativo !");
        }
    }


  //3. 
{
  let numero = 50;
  if (numero > 10) {
    console.log(numero+ " é maior que 10");
  } else {
    console.log(numero + " é menor que 10");
  }
  
}

  //4.
{
  let numero = 16;
    if (numero > 10 && numero < 20) {
      console.log(numero + " é maior que 10, e menor que 20 !");
    } else {
      console.log (" numero informado, fora do contexto mencionado no enunciado !");
    } 
}

  //5.
  var numero = 2;
  if (numero > 10 && numero < 20)
    if (numero === 15) {
      console.log("O numero é igual a "+ numero);
    } else { 
        console.log("O numero é maior que 10, e esta entre 10 e 20");
    } else { 
        console.log("O numero, nao esta entre 10 e 20 ")
    }
  