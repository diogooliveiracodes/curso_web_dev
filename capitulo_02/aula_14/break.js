for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

var diaDaSemana = 0;
switch (diaDaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia da semana inválido");
    break;
}

for (var a = 0; a < 10; a++) { //laço superior 

  for (var i = 0; i < 10; i++) { // laço inferior
    if (i === 2) {
      break;
    }
    console.log("i: " + i);
    console.log("a: " + a);
  }

}


for(var i = 0; i < 3; i++){
  console.log('LAÇO EXTERNO!')
  // break;
  for(var a = 0; a < 4; a++){
    if(a === 2) {
      break;
    }
    console.log('i :' + i + ' a: ' + a)
  }
}
