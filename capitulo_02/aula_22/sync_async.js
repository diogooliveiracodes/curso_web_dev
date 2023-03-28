// Requisição Síncrona
function imprimirConsole() {
    setTimeout(() => 'olá mundo', 1000);
    // return 'Olá Mundo';	
}

console.log('início')
var retorno = imprimirConsole();
console.log(retorno)
console.log('fim')

// Requisição Assíncrona
async function delay() {
    await new Promise(resolve => setTimeout((resolve), 2000));
    console.log('esperei o tempo de 2 segundos');
}

console.log('início');
delay();
console.log('fim');