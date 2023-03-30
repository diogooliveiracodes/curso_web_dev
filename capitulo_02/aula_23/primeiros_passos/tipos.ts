var nome : string = 'Diogo Oliveira';
// nome = 'João';
// nome = 15; // Erro

var idade : number = 32;
// idade = 32.4;
// idade = 'Diogo'; // Erro
var altura : number = 1.70;
var adulto : boolean = true;
var tempoLivre : null = null;
var saude : undefined = undefined;

// Array
var pets : string[] = ['Cachorro', 'Gato', 'Papagaio'];
var idadePets : number[] = [1, 2, 3];
// var petsIdade : any[] = ['Cachorro', 1, 'Gato', 2];
var petsIdade : [string, number, string, number] = ['Cachorro', 1, 'Gato', 2];
// petsIdade = ['Papagaio', 'cachorro', 'Pássaro', 4]; // Erro

// array com tipo string e number sem definir a ordem
var petsIdade2 : Array<string | number> = ['Cachorro', 1, 2, 'string ou number'];

// Object
var pessoa: { nome: string, idade: number, adulto?: boolean} = {
    nome: 'Diogo',
    idade: 32,
    // adulto: true
};

// Classe
class Carro {
    marca: string;
    modelo: string;
    motor?: number;

    constructor(marca: string, modelo: string, motor?: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
    }
}

var gol : Carro;
gol = new Carro('Volkswagen', 'Gol 1.0', 1.0)

// Função
function soma(num1: number, num2: number) : string {
    return `A soma de ${num1} mais ${num2} é igual a ${num1 + num2}`;
}

// soma(1, '2'); // Erro
console.log(soma(5, 7));

