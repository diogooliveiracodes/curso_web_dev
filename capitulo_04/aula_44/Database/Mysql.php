<?php

class Mysql
{
    const HOST = 'localhost';
    const USER = 'root';
    const PASS = '';
    const DBNAME = 'aula_mysql';

    private $connection;

    public function __construct()
    {
        $this->connect();
    }
    
    private function connect()
    {
        try{
            $this->connection = new PDO('mysql:host=' . self::HOST . ';dbname=' . self::DBNAME, self::USER, self::PASS);
            // $this->connection = new PDO('mysql:host=localhost;dbname=root', 'root', '');
            
            // em caso de erro trava o script e exibe o erro
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Conexão com o banco de dados realizada com sucesso! <br>";
        } catch(PDOException $e) {
            echo 'Erro ao se conectar ao Mysql: ' . $e->getMessage();
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }
}