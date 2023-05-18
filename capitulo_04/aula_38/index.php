<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<form action="form.php" method="post">
    <fieldset>
        <legend>Nome</legend>
        <input type="text" name="nome" id="nome">
    </fieldset>
    <fieldset>
        <legend>Endereço</legend>
        <input type="text" name="endereco" id="endereco">
    </fieldset>
    <button type="submit">Enviar</button>
</form>
    <?php
        include './Mysql.php';

        $mysql = new Mysql();
        $alunos = $mysql->getAlunos();

        foreach ($alunos as $aluno) {
            echo '<p>'. $aluno['nome'] . '</p>';
        }
    ?>
</body>
</html>