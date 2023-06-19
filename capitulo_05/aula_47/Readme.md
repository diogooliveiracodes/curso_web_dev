# Aula 47: Diretivas blade (24 de maio - quarta-feira)

## Objetivos:

- Sintaxe básica
- Variáveis: exibição de dados dinâmicos
- Diretivas blade
- Layouts
- Formulários
- Componentes (injeção de dependências, slots )

## Variáveis:

Para exibir variáveis no blade, basta utilizar a sintaxe de duas chaves, como no exemplo abaixo:

```php
{{ $nome }}
```

## Diretivas blade:

As diretivas blade são instruções que são executadas pelo blade, e não são exibidas no código fonte. As diretivas blade são precedidas pelo caractere @. As diretivas blade mais comuns são:

- @if, @else, @elseif
- @foreach, @for, @while
- @switch, @case, @default
- @isset, @empty
- @include, @extends, @yield, @section, @endsection

## Layouts:

Componente raiz (layouts.app):

```php
    <body>
        @yield('content')
    </body>
```

Componente filho (welcome):

```php
    @extends('layouts.app')

    @section('content')
        <p>Conteúdo da página</p>
    @endsection
```

## Formulários:

Nos formulários com requisições POST, UPDATE e DELETE, é necessário utilizar a diretiva @csrf. Para requisições PUT e DELETE, é necessário utilizar a diretiva @method('PUT') ou @method('DELETE'), respectivamente.

```php
    <form action="{{ route('cadastrar') }}" method="POST">
        @method('PUT')
        @csrf
        <input type="text" name="nome">
        <input type="submit" value="Enviar">
    </form>
```

## Componentes:

Comando de criação de componente:

```php
    php artisan make:component NomeComponente
```

    Utilização do componente:

```php
    <x-nome-componente nome="Nome do componente" />
```

Injeção de dependências no componente:

```php
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }
```

Slots:

```php

// NA CHAMADA DO COMPONENTE
<x-alerta>
    Mensagem inserida no Slot
</x-alerta>

// NO COMPONENTE ALERTA
<div class="alert alert-danger">
    {{ $slot }}
</div>

```

## Referências:
[Documentação do Laravel](https://laravel.com/docs/10.x/blade)