<?php

require_once __DIR__ . '/../Database/Mysql.php';

class Aluno
{
    private $db;

    public function __construct()
    {
        $this->db = new Mysql();
    }

    public function retornarAlunos()
    {
        // $connection = $this->db->getConnection();
        $stmt = $this->db->getConnection()->prepare("SELECT * FROM alunos");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function retornarAluno($id)
    {
        $sql = "SELECT * FROM alunos WHERE id = :id";
        $stmt = $this->db->getConnection()->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function criarAluno($id, $nome, $email, $data_nascimento)
    {
        try {
            $sql = "INSERT INTO alunos (id, nome, email, data_nascimento) VALUES (:id, :nome, :email, :data_nascimento)";
            $stmt = $this->db->getConnection()->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->bindValue(':nome', $nome);
            $stmt->bindValue(':email', $email);
            $stmt->bindValue(':data_nascimento', $data_nascimento);
            $stmt->execute();

            echo 'Aluno criado com sucesso! Linhas alteradas: '. $stmt->rowCount();
        } catch (PDOException $e) {
            echo 'Erro ao criar aluno: ' . $e->getMessage();
        }
    }

    public function atualizarAluno($id, $nome, $email, $data_nascimento)
    {
        try {
            $sql = "UPDATE alunos SET nome = :nome, email = :email, data_nascimento = :data_nascimento WHERE id = :id";
            $stmt = $this->db->getConnection()->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->bindValue(':nome', $nome);
            $stmt->bindValue(':email', $email);
            $stmt->bindValue(':data_nascimento', $data_nascimento);
            $stmt->execute();

            echo 'Aluno atualizado com sucesso! Linhas alteradas: '. $stmt->rowCount();
        } catch (PDOException $e) {
            echo 'Erro ao criar aluno: ' . $e->getMessage();
        }
    }

    public function deletarAluno($id)
    {
        try{
            $sql = "DELETE FROM alunos WHERE id = :id";
            $stmt = $this->db->getConnection()->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();

            echo 'Aluno deletado com sucesso! Linhas alteradas: '. $stmt->rowCount();
        } catch (PDOException $e) {
            echo 'Erro ao deletar aluno: ' . $e->getMessage();
        }
    }

    public function boletim($nome)
    {
        $sql = "SELECT * FROM alunos_notas WHERE nome = :nome";
        $stmt = $this->db->getConnection()->prepare($sql);
        $stmt->bindValue(':nome', $nome);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
