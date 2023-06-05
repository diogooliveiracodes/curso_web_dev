@extends('layouts.app')

@section('content')
<div class="container">
    <form action="{{ route('entrar') }}" method="POST">
        @method('PUT')
        @csrf
        <div class="row mt-2">
            <div class="col">
                <input type="text" id="email-teste" class="form-control"
                    placeholder="Email">
            </div>
            <div class="col">
                <input type="text" class="form-control"
                    placeholder="Senha">
            </div>
        </div>
        <button type='submit' class='btn btn-primary mt-2'>Entrar</button>
    </form>
</div>
@endsection
