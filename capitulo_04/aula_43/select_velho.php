<?php

function select() {
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=aula_mysql', 'root', '');
        echo "Conectado com sucesso!";

        $select = $pdo->query('SELECT * FROM alunos');
        $alunos = $select->fetchAll();

        foreach($alunos as $aluno) {
            echo '<pre>';
            echo $aluno['id'] . ' - ' . $aluno['nome'] . ' - ' . $aluno['email'];
            echo '</pre>';
        }
        
        return $pdo;
    } catch (PDOException $e) {
        echo 'Falha ao conectar. Erro:' . $e->getMessage();
        exit;
    }
}
