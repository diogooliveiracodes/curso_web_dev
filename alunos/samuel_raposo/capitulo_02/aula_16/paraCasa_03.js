// 3. Crie uma função em JavaScript chamada "maiorNumero" que recebe dois parâmetros numéricos, "a" e "b", e retorna o maior número entre eles.

function maiorNumero(a,b){
    if(a>b){
      return a
    } else if(a==b){
      return "A é igual a B";
    } else {
      return b
    }
  };
  
  console.log(maiorNumero(5,8));