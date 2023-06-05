<?php

require('connection.php');

function preparar(int $id, string $tabela = 'alunos') 
{
    try {

        if(!in_array($tabela, ['alunos', 'disciplinas', 'cursos', 'notas'])) {
            throw new PDOException('Tabela não encontrada');
        }

        $pdo = connect('localhost', 'aula_mysql', 'root', '');
        $sql = "SELECT * FROM $tabela WHERE id > :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        echo '<br>'. $stmt->rowCount() . ' registros encontrados<br>';
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    } catch (PDOException $e) {
        echo 'Ocorreu um erro. Descrição do erro: ' . $e->getMessage();
        exit;
    }
}