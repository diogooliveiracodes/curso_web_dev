<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Criar novo Artigo</title>
</head>
<body>
    <form action="{{ route('artigos.store') }}" method="post">
        @csrf
        <label for="titulo">Título</label>
        <input type="text" name="titulo" id="titulo">
        <br>
        <label for="conteudo">Conteúdo</label>
        <input type="text" name="conteudo" id="conteudo">
        <br>
        <button type="submit">Criar</button>
    </form>
</body>
</html>
