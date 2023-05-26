<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    // $pdo = new PDO('mysql:host=localhost;dbname=aula_mysql', 'root', '');
    // $sql = "SELECT * FROM alunos WHERE nome = :nome";
    // $result = $pdo->prepare($sql);
    // $result->bindValue(':nome', $nome);
    // $return = $result->fetchAll();
    // foreach($return as $aluno){
    //     echo 'Nome: '. $aluno['nome'] . '<br>';
    // }

    // print $nome using html scape
    // echo htmlspecialchars($nome);
    // echo $nome;

    echo __DIR__. $nome;

    if($nome = 'Alunos') {
        require __DIR__. "'$nome'";
    }

}
?>