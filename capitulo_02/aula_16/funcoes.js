// // declaração de função
function nomeFuncao() {
    let y = 20;
    console.log(y);
}

// // chamada de função
nomeFuncao();
nomeFuncao(); // podemos chamar mais de uma vez a mesma função

//==================================================================

// funções tem parâmetros
function nomeDaFuncao(parametro) {
    //Chamada da função de disparo de email
    console.log('Foi enviado um email para: '+parametro)
}

var lista = ['joao', 'maria', 'pedro']

// você pode usar um laço de repetição para iterar dentro de uma lista
// e chamar a função para cada ítem da lista
for(var i = 0; i < lista.length; i++) {
    nomeDaFuncao(lista[i]);
}

//==================================================================

// Funções recebem parâmetros
function soma(parametro1, parametro2) {
    var resultado = parametro1 + parametro2;
    console.log(resultado)
}

soma(2, 5) // parametro1 = 2 e parametro2 = 5

//==================================================================

// você pode atribuir a uma variável o retorno de uma função.
function olaMundo(){
    return 'Hello World!'
}
var resultado = olaMundo() + ' 2'
console.log(olaMundo())
console.log(resultado)

//==================================================================

//você pode reaproveitar a mesma função para variáveis diferentes
function soma(parametro1, parametro2) {
    return parametro1 + parametro2;
}
var resultado1 = soma(12, 5)
var resultado2 = soma(23, 12)
console.log(resultado1)
console.log(resultado2)

//==================================================================

// uma variável declarada fora da função, pode ser acessada de dentro
// da função.
var foraDaFuncao = 'Estou de fora';

function imprimeNoConsole() {
    // mas uma variável declarada dentro da função só serve para a própria função
    var dentroDaFuncao = 'Estou de dentro'
    console.log(foraDaFuncao) //funciona
    console.log(dentroDaFuncao) // aqui dentro funciona
}
console.log(dentroDaFuncao) // aqui fora não funciona

// chamada da função
imprimeNoConsole()

//==================================================================


// Uma função pode manipular objetos do lado de fora.
var ola = "Olá ";
function addMundo(){
    ola = ola+'Mundo'
}
addMundo()
console.log(ola)

//==================================================================

//chegou no return a função não executa as linhas seguintes
function cafeteira (parametro) {

    // verifica se a chícara não vai transbordar
    if(parametro > 50){ 

        // se este trecho for executado o próximo return não será
        // executado
        return 'A chícara já está cheia.'
    }

    // se a chícara estiver vazia, ele enche de café
    return parametro + 50;
}

var chicara = 32; // máximo 100ml
console.log(cafeteira(chicara))

//==================================================================

// Função Anônima
var soma = function (a, b) {
  return a + b;
};

var resultado = soma(2, 3); // resultado é 5
console.log(resultado)

//ARROW FUNCTION
//outra forma de escrever a função anônima
var soma = (a, b) => a + b;
var resultado = soma(2, 3); // resultado é 5
console.log(resultado)

//==================================================================
