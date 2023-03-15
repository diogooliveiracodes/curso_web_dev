// 7. Crie uma função em JavaScript chamada "validarCPF" que recebe um parâmetro string, "cpf", 
// e verifica se o CPF é válido. Retorne true se o CPF for válido e false caso contrário.

function validarCpf(cpf) {
    var soma = 0;
    var resto;

    if (cpf.length != 11){
        return false;
    }

    // Calculando primeiro dígito verificador
    for (i=1; i<=9; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
             resto = 0;
        }
        if (resto != parseInt(cpf.substring(9, 10)) ) {
            return false;
        }


     // Calculando segundo dígito verificador

    soma = 0;

        for (i = 1; i <= 10; i ++){
            soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) {
            resto = 0;
        }
        if (resto != parseInt(cpf.substring(10, 11))) {
            return false;
        }

    return true;
}

var cpf = '12415780600';

console.log(validarCpf(cpf)+" CPF Valido");
