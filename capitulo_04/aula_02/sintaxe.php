<?php

// VARIÁVEIS
$nome = "João";
const CPF = "123.456.789-00";


// LISTAS (ARRAYS)
$lista = array("João", "Maria", "José"); //antigo
$lista = ["João", "Maria", "José"];

// OBJETOS
$usuario2 = [
    "nome" => "João",
    "cpf" => "123.456.789-00",
    "parentes" => ["Maria", "José"]
]; // $usuario2['nome']

$usuario = new stdClass();
$usuario->nome = "João";
$usuario->cpf = "123.456.789-00";
$usuario->parentes = ["Maria", "José"];

$usuario3 = (object) [
    "nome" => "João",
    "cpf" => "123.456.789-00",
    "parentes" => ["Maria", "José"]
]; // cria uma instância de um Std Class, tornando o 
// objeto acessível em tempo de execução $usuario3->nome


// FUNÇÕES
function soma($a, $b)
{
    return $a + $b;
}

// FUNÇÕES ANÔNIMAS
$soma2 = fn ($a, $b) => $a + $b;

// LAÇOS DE REPETIÇÃO
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

$lista = ["João", "Maria", "José"];
foreach ($lista as $item) {
    echo $item;
}

$objeto = (object) [
    "nome" => "João",
    "cpf" => "123.456.789-00",
    "parentes" => ["Maria", "José"]
];
foreach ($objeto as $chave => $valor) {
    echo $chave . ": " . $valor;
}

// CONDICIONAIS
if ($a > $b) {
    echo "A é maior que B";
} elseif ($a < $b) {
    echo "A é menor que B";
} else {
    echo "A é igual a B";
}

// OPERADORES LÓGICOS
if ($a > $b && $a > $c) {
    echo "A é maior que B e C";
}

if ($a > $b || $a > $c) {
    echo "A é maior que B ou C";
}

// OPERADORES ARITMÉTICOS
$a = 10;
$b = 5;
$c = $a + $b; // 15
$c = $a - $b; // 5
$c = $a * $b; // 50
$c = $a / $b; // 2
$c = $a % $b; // 0
$c = $a ** $b; // 100000

// OPERADORES TERNÁRIOS
$j = $i < 10 ? 1 : 2;

// TRATAMENTO DE ERROS
try {
    echo $a;
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
} finally {
    echo "Sempre executa";
}
