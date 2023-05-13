<?php

require_once './Mysql.php';

$nome = $_POST['nome'] ?? null;
// $nome = isset($_POST['nome']) ? $_POST['nome'] : null;
$endereco = $_POST['endereco'] ?? null;

$mysql = new Mysql();
$mysql->insertAluno($nome);

$alunos = $mysql->getAlunos();

foreach ($alunos as $aluno) {
    echo $aluno['nome'] . '<br>';
}

echo '<a href="index.php">Voltar</a>';