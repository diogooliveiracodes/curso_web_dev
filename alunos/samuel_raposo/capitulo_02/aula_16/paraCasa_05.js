// 5. Crie uma função em JavaScript chamada "verificarParImpar" que recebe um parâmetro numérico, 
//"numero", e retorna a mensagem "par" caso o número seja par e "ímpar" caso seja ímpar.


function verificarParImpar(numero){
    if (numero % 2 != 0){
      return numero+ " É ímpar";
    } else if (numero == 0){
      return numero + " É neutro";
    } else {
      return numero+ " É par";
    }
  }
  console.log(verificarParImpar(0));
