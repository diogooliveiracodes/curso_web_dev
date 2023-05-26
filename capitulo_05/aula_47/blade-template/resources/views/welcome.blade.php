@extends('layouts.app')

@php
    $idade = 67;
    $alunos = [
        (object)["nome"=>"Maria", "nota"=>10],
        (object)["nome"=>"José", "nota"=>7],
        (object)["nome"=>"João", "nota"=>5],
        (object)["nome"=>"Pedro", "nota"=>3],
        (object)["nome"=>"Bianca", "nota"=>9],
        (object)["nome"=>"Ana", "nota"=>8],
        (object)["nome"=>"Luiza", "nota"=>6],
        (object)["nome"=>"Paulo", "nota"=>4],
        (object)["nome"=>"Carlos", "nota"=>2],
        (object)["nome"=>"Márcio", "nota"=>1],
    ];
@endphp

@section('content')

    <div class="container mt-2">
        @foreach ($alunos as $key => $aluno)
            {{-- @if($aluno->nota < 7)
                @continue // pula
                @break // para
            @endif --}}
            @if($aluno->nota > 6)
                <p class="bg-success p-2 text-white"> index: {{$key}}, {{ $aluno->nome }}, {{ $aluno->nota }}</p>
            @else
                <p class="bg-danger p-2 text-white">{{ $aluno->nome }}, {{ $aluno->nota }}</p>
            @endif
        @endforeach
    </div>

@endsection
