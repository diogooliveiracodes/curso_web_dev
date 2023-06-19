<!DOCTYPE html>
<html lang="en">
<head>
<?php
    require './cores.php';
    require './Mysql.php';
    $mysql = new Mysql;
    $alunos = $mysql->getAlunos();
?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        h1{
            color: <?php echo $cor_titulo; ?>;
        }
    </style>
    <title>PHP</title>
</head>
<body>
    <ul>
        <?php
            foreach($alunos as $aluno){
                echo '<li>'. $aluno['nome'] . '</li>';
            }
        ?>
    </ul>
</body>
</html>