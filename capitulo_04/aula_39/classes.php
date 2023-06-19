<?php
class Pessoa{}
interface Vertebrado
{
    public function exibir(): void;
}
class Aluno extends Pessoa implements Vertebrado
{
    public string $nome;
    public string $idade;

    public function __construct(string $nome, string $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function exibir(): void
    {
        echo "Nome: $this->nome - Idade: $this->idade";
    }
}

$aluno = new Aluno("João", 20);
$aluno->exibir();

$aluno2 = new Aluno("Maria", 30);
$aluno2->exibir();
