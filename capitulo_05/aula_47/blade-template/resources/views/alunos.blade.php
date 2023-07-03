@extends('layouts.app')

@php
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

<h1 class="mt-3">Lista de Alunos</h1>

@foreach($alunos as $aluno)
    <x-aluno-componente :message="$aluno->nome">
        <small>Nota: {{ $aluno->nota }}</small>
    </x-aluno-componente>
@endforeach

@endsection
