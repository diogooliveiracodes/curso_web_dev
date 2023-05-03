<?php

class Mysql
{
    private $database;

    public function __construct()
    {
        $this->connect();
        // $this->limparAlunos();
        $this->injetarAlunos();
    }

    public function connect()
    {
        $this->database = new PDO('mysql:host=localhost;dbname=cursophp', 'root', '');
    }

    public function insertAluno($nome)
    {
        $this->database->exec("INSERT INTO alunos (nome) VALUES ('{$nome}')");
    }

    public function getAlunos()
    {
        return $this->database->query('select * from alunos');
    }

    public function limparAlunos()
    {
        $this->database->exec('DELETE FROM alunos');
    }

    public function injetarAlunos()
    {
        $this->database->exec('INSERT INTO alunos (id, nome, endereco) VALUES 
            (1, "Diogo Oliveira", "Sete Lagoas"),
            (2, "Maria Silva", "Belo Horizonte"),
            (3, "João Souza", "São Paulo"),
            (4, "Pedro Abreu", "Rio de Janeiro"),
            (5, "Lucas Souza", "São Paulo")
        ');
    }
}
