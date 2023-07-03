<?php 

$connection = new PDO('mysql:host=localhost;dbname=aula_mysql', 'root', '');
$stmt = $connection->query("SELECT * FROM alunos");
$stmt->execute();
$alunos = $stmt->fetchAll();

var_dump($alunos);

foreach($alunos as $aluno) {
    $nome = $aluno['nome'];
    $id = $aluno['id'];
    $nome_crypt = md5($nome);
    
    $stmt = $connection->exec("UPDATE alunos SET nome = '$nome_crypt' WHERE id = '$id'");
}




