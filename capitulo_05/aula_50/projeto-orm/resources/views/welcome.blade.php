<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    </head>
    <body class="antialiased">
        @foreach(App\Models\Aluno::all() as $aluno)
            <h2>{{$aluno->id}}: {{$aluno->nome}}</h2>
            <p>{{$aluno->email}}</p>
            @if(!empty($aluno->endereco))
                <p>rua: {{$aluno->endereco->rua}}</p>
            @endif
            {{-- @foreach($aluno->matriculas as $matricula)
                <p>Nº Matrícula: {{$matricula->id}} - {{$matricula->descricao}}</p>
            @endforeach --}}
            @if(!empty($aluno->cursos))
                @foreach($aluno->cursos as $curso)
                    <p>Curso: {{$curso->nome}}</p>
                @endforeach
            @endif
        @endforeach
        {{-- @foreach(App\Models\Matricula::all() as $matricula)
            <h1>Matrícula de número: {{$matricula->id}}</h1>
            <h2>{{$matricula->aluno->nome}} - {{$matricula->aluno->email}}</h2>
            <h2>{{$matricula->descricao}}</h2>
            <hr>
        @endforeach --}}
    </body>
</html>
