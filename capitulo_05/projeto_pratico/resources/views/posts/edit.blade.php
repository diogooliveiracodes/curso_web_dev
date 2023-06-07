<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Posts Edit</title>
</head>
<body>
    <form action="{{route('post.update', $post)}}" method="post">
        @csrf
        @method('PUT')
        <input type="text" name="title" id="title" placeholder="Título" value="{{$post->title}}">
        <textarea name="content" id="content" cols="30" rows="10" placeholder="Conteúdo">
            {{$post->content}}
        </textarea>
        <input type="number" name="user_id" value="1" hidden>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
