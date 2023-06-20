<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <title>Aula 47</title>
</head>
@php
    $idade = 70;
    $exibir = true;
    $hello = "Hello World!";
    $alunos = [
        (object)["nome"=>"Maria","nota"=>10],
        (object)["nome"=>"João","nota"=>5],
        (object)["nome"=>"José","nota"=>7],
        (object)["nome"=>"Pedro","nota"=>3],
        (object)["nome"=>"Bianca","nota"=>9],
        (object)["nome"=>"Ana","nota"=>8],
        (object)["nome"=>"Luiza","nota"=>6],
        (object)["nome"=>"Paulo","nota"=>4],
        (object)["nome"=>"Carlos","nota"=>2],
        (object)["nome"=>"Márcio","nota"=>1]
    ];
@endphp

<body>
    @if($exibir == true)
        <h1>{{$hello}}</h1>
    @else 
        <h1>A variável exibir está com o valor false.</h1>
    @endif
   
    @if ($idade < 18)
        <h1>Menor de idade</h1>
    @elseif ($idade >= 18 && $idade < 60)
        <h1>Adulto</h1>
    @else 
        <h1>Idoso</h1>
    @endif

    @foreach ($alunos as $aluno)
        <p>{{$aluno->nome}}, {{$aluno->nota}}</p>
    @endforeach

    @foreach ($alunos as $aluno)
        @if ($aluno->nota > 6)
        <p class="bg-success">{{$aluno->nome}}, {{$aluno->nota}}</p>
        @else
        <p class="bg-danger">{{$aluno->nome}}, {{$aluno->nota}}</p>
        @endif
        
    @endforeach

</body>
</html>