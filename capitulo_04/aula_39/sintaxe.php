<?php

// VARIÁVEIS
$nome = "João";
const CPF = "123.456.789-00";


// LISTAS (ARRAYS)
$lista = array("João", "Maria", "José"); //antigo
$lista = ["João", "Maria", "José"];
$lista2 = [1, 2, 3, 4, 5];

// OBJETOS
$usuario2 = [
    "nome" => "João",
    "cpf" => "123.456.789-00",
    "parentes" => ["Maria", "José"]
];
echo $usuario2["nome"];

$usuario = new stdClass();
$usuario->nome = "João";
$usuario->cpf = "123.456.789-00";
$usuario->parentes = ["Maria", "José"];
echo $usuario->nome;

$usuario3 = (object) [
    "nome" => "João",
    "cpf" => "123.456.789-00",
    "parentes" => ["Maria", "José"]
]; // cria uma instância de um Std Class, tornando o 
// objeto acessível em tempo de execução $usuario3->nome
echo $usuario3->nome;

// FUNÇÕES
function soma($a, $b)
{
    return $a + $b;
}

// FUNÇÕES ANÔNIMAS
$soma2 = fn ($a, $b) => $a + $b;
// echo $soma2($b = 7, $a = 6); // 13
echo $soma2(7, 6); // 13

// LAÇOS DE REPETIÇÃO
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

$i = 1;
while ($i < 10) {
    echo $i;
    $i++;
}

$lista = ["João", "Maria", "José"];
foreach ($lista as $item) {
    echo $item;
}

// FOREACH
$objeto = (object) [
    "nome" => "João",
    "cpf" => "123.456.789-00",
    "parentes" => ["Maria", "José"]
];
foreach ($objeto as $chave => $valor) {
    echo $chave . ": " . $valor;
}

// CONDICIONAIS
if ($a < 10) {
    echo "A é maior que 10";
} elseif ($a == 10) {
    echo "A é menor que 10";
} else {
    echo "A é igual a 10";
}

// OPERADORES LÓGICOS
if ($i < 10 && $i > 5) { //e
    echo "i é menor que 10 e maior que 5";
}

if ($i < 10 || $i > 5) {
    echo "i é menor que 10 ou maior que 5";
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
// if($i < 10) {
//     $j = 1;
// } else {
//     $j = 2;
// }

// OPERADOR NULL COALESCING
function cadastrarCliente($nome, $email, $cpf)
{
    $nome = $nome ?? "Não informado";
    $email = $email ?? "Não informado";
    $cpf = $cpf ?? "Não informado";
}

$j = $concordaComTermos ?? false;
// if(isset($concordaComTermos)) {
//     $j = $concordaComTermos;
// } else {
//     $j = false;
// }

// TRATAMENTO DE ERROS
try {
    echo $a;
    throw new Exception("Cospe para o catch");
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
} finally {
    echo "Sempre executa";
}
