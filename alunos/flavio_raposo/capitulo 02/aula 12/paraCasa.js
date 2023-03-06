//--Para Casa 01--
var listaNome = ['Flavio','Samuel','Diogo','Claudio','Guilherme'];
//console.log(listaNome);

//--Para Casa 02--
listaNome[0] = listaNome[0]+ ' Raposo';

//--Para Casa 03--
console.log(listaNome);

//--Para Casa 04--
console.log('A lista contem '+listaNome.length+' itens.');

//--Para Casa 05--
console.log('O nome do Claudio está no index '+ listaNome.indexOf('Claudio'));

//--Para Casa 06--
var listaNome2 = ['Delio','Adalgisa',listaNome];
//console.log(listaNome2);

//--Para Casa 07--
console.log('Imprimindo a primeira lista através da segunda: '+listaNome2[2]);

//--Para Casa 08--
//8.1

var dadosPessoais = {
  nome: 'Flavio Raposo',
  cpf: '07283764666',
  identidade: 'MG6910398',
}

//8.2

dadosPessoais.dataNascimento ='30/05/1988';
console.log(dadosPessoais);

//8.4

console.log('O objeto dadosPessoais contem '+Object.keys(dadosPessoais).length+ ' itens.');

//8.5
console.log('O item de indice 3 no objeto é a data de nascimento e o valor contido nele é: '+dadosPessoais.dataNascimento);

