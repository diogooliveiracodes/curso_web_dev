<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posts Create</title>
</head>
<body>
    <form action="{{route('post.store')}}" method="post">
     @csrf
     <input type="text" name="title" id="title" placeholder="Título">
     <textarea name="content" id="content" cols="30" rows="10" placeholder="Conteúdo"></textarea>
     <input type="number" name="user_id" id="user_id" value="1" hidden>
     <button type="submit">Enviar</button>
    </form>

</body>
</html>