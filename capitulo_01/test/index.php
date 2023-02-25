<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Teste</title>
  </head>
  <body>
    <main>
      <h1>Alunos:</h1>
      <ol>
        <?php 
          $lista = [
            'Diogo',
            'Diego',
            'Davi',
            'Flavio',
            'Henrique',
            'Lucas',
            'Mariana',
            'Natalia',
            'Pedro'
          ];

          foreach($lista as $nome) {
            echo "<li style=\"color: red;\">". $nome ."</li>";
          }
        ?>   
      </ol>
    </main>
  </body>
</html>