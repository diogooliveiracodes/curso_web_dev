<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cursos</title>
</head>
<body>
    <h1>Cursos</h1>
    <ul>
        @foreach ($cursos as $curso)
            <li>{{ $curso->nome }}</li>
        @endforeach
    </ul>
</body>
</html>
