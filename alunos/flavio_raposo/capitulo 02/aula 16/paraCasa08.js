function calcularImc(peso, altura) {
    var imc = peso / (altura * altura);

    if (imc < 18.5 ) {
        return 'IMC: '+imc.toFixed(2) + '. Você está abaixo do peso normal.'
    } else if (imc >=18.5 && imc <= 24.99) {
        return 'IMC: '+imc.toFixed(2)+'. Você está no peso normal.'
    } else if (imc >=25 && imc <=29.99 ) {
        return 'IMC: '+imc.toFixed(2)+'. Você está com excesso de peso.'
    } else if (imc >=30 && imc <=34.99) {
        return 'IMC: '+imc.toFixed(2)+'. Você está com obesidade classe I.'
    } else if (imc >=35 && imc <=39.99) {
        return 'IMC: '+imc.toFixed(2)+'. Você está com obesidade classe II.'
    } else if (imc >=40) {
        return 'IMC: '+imc.toFixed(2)+'. Você está com obesidade classe III.'
    }
    }

    console.log(calcularImc(95, 1.78));