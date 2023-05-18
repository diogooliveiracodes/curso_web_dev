<?php

require('prepared.php');

$alunos = preparar(1, 'tabela_nao_existente');

foreach( $alunos as $aluno ){
    echo '<pre>';
    echo $aluno['id'] . ' - ' . $aluno['nome'] . ' - ' . $aluno['email'];
    echo '</pre>';
}



// // =============== CONEXÃO COM O BANCO DE DADOS
// require('connection.php');
// connect('localhost', 'aula_mysql', 'root', '');

// // =============== SELECT
// require('select.php');
// // CUIDADO COM O SQL INJECTION
// // $alunos = select("SELECT * FROM alunos WHERE id = 1; CREATE TABLE hacker (id int PRIMARY KEY, nome VARCHAR(50))");
// $alunos = select("SELECT * FROM alunos WHERE id = 1");

// foreach( $alunos as $aluno ){
//     echo '<pre>';
//     echo $aluno['id'] . ' - ' . $aluno['nome'] . ' - ' . $aluno['email'];
//     echo '</pre>';
// }

// // =============== SELECT VIEW
// $alunos_aprovados = select("SELECT * FROM alunos_aprovados");

// foreach( $alunos_aprovados as $aluno ){
//     echo '<pre>';
//     echo $aluno['NOME'] . ' - ' . $aluno['DISCIPLINA'] . ' - ' . $aluno['NOTA'];
//     echo '</pre>';
// }





// connect(
//     $host = 'localhost',
//     $database = 'aula_mysql',
//     $user = 'root',
//     $password = ''
// );