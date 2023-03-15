//Crie uma função em JavaScript chamada "concatenarStrings" que recebe dois parâmetros do tipo string, "string1" e "string2", e retorna a concatenação das duas strings.

function concactenarStrings(string1,string2,string3,string4){
    if (typeof(string1) !== 'string' || typeof(string2) !== 'string' ||typeof(string3) !== 'string' || typeof(string4) !== 'string') {
        return ("Os tipos de dados informados, nao sao string"); 
    }    
        return string1+string2+string3+string4 ;
  
}
  console.log(concactenarStrings('Samuel',' Raposo', ' Gestor', ` 1`));