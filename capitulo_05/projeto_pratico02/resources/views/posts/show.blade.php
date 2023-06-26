<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posts Show</title>
</head>
<body>
        <a href="{{route('post.index')}}">Voltar para o início</a>
        <h2>id: {{$post->id}} - {{$post->title}}</h2> <a href="{{route('post.edit',$post)}}">Editar</a>
        <p>{{$post->content}}</p>
        <small>{{$post->created_at}}</small>
        <small>Autor: {{$post->user->name}}</small>
</body>
</html>