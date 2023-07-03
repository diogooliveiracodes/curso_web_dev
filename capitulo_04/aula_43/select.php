<?php

require('connection.php');

function select(string $query) {
    try {
        $pdo = connect('localhost', 'aula_mysql', 'root', '');

        $select = $pdo->query($query);

        return $select->fetchAll();

    } catch (PDOException $e) {
        echo 'Falha ao conectar. Erro:' . $e->getMessage();
        exit;
    }
}
