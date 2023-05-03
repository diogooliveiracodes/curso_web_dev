<?php

require_once './Mysql.php';

$nome = $_POST['nome'] ?? null;
$endereco = $_POST['endereco'] ?? null;

$mysql = new Mysql();
$mysql->insertAluno($nome, $endereco);

$alunos = $mysql->getAlunos();

foreach ($alunos as $aluno) {
    echo $aluno['nome'] . '<br>';
}

echo '<a href="index.php">Voltar</a>';