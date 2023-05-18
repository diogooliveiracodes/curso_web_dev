<?php

function connect(
    string $host,
    string $database,
    string $user,
    string $password
) {
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$database", $user, $password);
        echo "Conectado com sucesso!";
        
        return $pdo;
    } catch (PDOException $e) {
        echo 'Falha ao conectar. Erro:' . $e->getMessage();
        exit;
    }
}
