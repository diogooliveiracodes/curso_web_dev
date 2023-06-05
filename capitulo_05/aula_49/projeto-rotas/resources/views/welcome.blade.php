<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Aula 49</title>

    </head>
    <body>
        <a href="{{ route('ola', ['nome' => 'Diogo']) }}">Ir para a rota /ola</a>
    </body>
</html>
