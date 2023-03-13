// FOR
 // Crie 5 exercícios usando for em javascript
 // 1 - Crie um algoritmo que receba um número e imprima todos os números pares de 0 até o número inserido.
 // 2 - Crie um algoritmo que receba um número e imprima todos os números ímpares de 0 até o número inserido.
 // 3 - Crie um algoritmo que receba um número e imprima todos os números de 0 até o número inserido.
 // 4 - Crie um algoritmo que receba um número e imprima a tabuada dele de 1 a 10.
 // 5 - Crie um algoritmo que receba um número e imprima a tabuada dele de 10 a 1.

//1. 
var num = 1586
for (i=0 ; i <= num; i++){
  if ( i % 2 == 0){
    console.log(i + " é Par ");
  } else {
    console.log(i + " é Ímpar ");
  }
}

//2.
var num = 30;
for (i=0; i<= num ; i++){
  if (i % 2 != 0){
    console.log(i + " é impar !");
  }
}


//3.
var num = 10
for (i=0; i<=num; i++){
  console.log(i)
}

//4.
var num = 3;
for (i=1 ; i<=10 ; i++){
  console.log (i + " * " + num + " = " + (i * num));
}

//5.

var num = 3
for (i=10 ; i>=1; i--){
  console.log(num + " * " + i + " = "+ (num*i));
}
