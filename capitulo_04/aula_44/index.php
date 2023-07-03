<?php 

require 'Models/Aluno.php';

$aluno_model = new Aluno();

// BOLETIM
$boletim = $aluno_model->boletim("João");
// var_dump($boletim);
echo "Boletim do João: <br>";
foreach($boletim as $nota){
    echo $nota['DISCIPLINA']. '| Nota: '. $nota['NOTA'] . '<br>';
}

// DELETAR ALUNO
// $aluno_model->deletarAluno(5);

// ATUALIZAR ALUNO
// $aluno_model->atualizarAluno(5, 'Joana Silva', 'joana@email.com', '1967-02-01');

// CRIAR ALUNO
// $aluno_model->criarAluno(5, 'Joana', 'joana@email.com', '1967-02-01');

// RETORNAR ALUNO PELO ID
// $aluno = $aluno_model->retornarAluno(2);
// echo $aluno['nome'];

// RETORNAR TODOS OS ALUNOS
echo '<br>';
$alunos = $aluno_model->retornarAlunos();
foreach($alunos as $aluno){
    echo 'Nome: '. $aluno['nome'] . '<br>';
}
