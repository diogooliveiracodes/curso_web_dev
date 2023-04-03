// 7. Crie uma função em JavaScript chamada "validarCPF" que recebe um parâmetro string, "cpf", 
// e verifica se o CPF é válido. Retorne true se o CPF for válido e false caso contrário.

function validarCPF(cpf) {
    //verifica se o cpf tem 11 dígitos
    if(cpf.length !== 11){
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;
  
    // Verifica o primeiro dígito verificador
    if (digito1 !== parseInt(cpf.charAt(9))) {
      return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    // Verifica o segundo dígito verificador
    if (digito2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true
}

console.log(validarCPF('11429959681'))