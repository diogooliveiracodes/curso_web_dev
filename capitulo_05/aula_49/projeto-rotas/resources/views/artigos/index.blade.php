<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Artigos</title>
</head>
<body>

    <h2>Criar novo artigo: <a href=" {{ route('artigos.create') }}">Novo</a></h2>

    @foreach($artigos as $artigo)
        <h2><a href=" {{route('artigos.show', ['artigo' => $artigo])}} ">{{ $artigo->titulo }}</a></h2>
        <p>{{ $artigo->conteudo }}</p>
    @endforeach
</body>
</html>
