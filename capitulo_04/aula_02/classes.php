<?php

class Aluno
{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function exibir(): void
    {
        echo "Nome: $this->nome - Idade: $this->idade";
    }
}
