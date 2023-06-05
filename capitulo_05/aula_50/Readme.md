# Aula 50: Relacionamentos e ORM (31 de maio - quarta-feira)

## O que é um ORM?

ORM é a abreviação de Object Relational Mapping, ou seja, Mapeamento Objeto Relacional. É uma técnica de desenvolvimento que permite que as regras de negócio da aplicação sejam escritas em termos de objetos e propriedades, sem que o desenvolvedor tenha que se preocupar com o banco de dados subjacente.

## O que é um relacionamento?

Um relacionamento é uma associação entre entidades. Por exemplo, um relacionamento entre as entidades Cliente e Pedido pode ser definido como: um cliente pode fazer vários pedidos, mas um pedido só pode ser feito por um cliente.

## Quais são os tipos de relacionamentos?

Os tipos de relacionamentos são:

- Um para um (1:1)
- Um para muitos (1:N)
- Muitos para muitos (N:N)

## O que é um relacionamento um para um?

Um relacionamento um para um é quando uma entidade está associada a apenas uma outra entidade. Por exemplo, um aluno pode ter apenas um endereço.

## O que é um relacionamento um para muitos?

Um relacionamento um para muitos é quando uma entidade está associada a várias outras entidades. 
Por exemplo, um aluno pode ter várias matrículas, mas uma matrícula pertence apenas a um aluno.

## O que é um relacionamento muitos para muitos?

Um relacionamento muitos para muitos é quando uma entidade está associada a várias outras entidades e vice-versa. 
Por exemplo, um aluno pode pertencer a várias turmas e uma turma tem vários alunos.

<hr>

## Eloquent ORM

O Eloquent ORM é um ORM que acompanha o Laravel. Ele permite que você trabalhe com bancos de dados relacionais usando objetos e métodos.

Um modelo Eloquent é usado para interagir com uma tabela no banco de dados. Cada modelo Eloquent corresponde a uma única tabela no banco de dados. Os modelos Eloquent permitem que você consulte dados usando métodos de consulta fluente e também permitem que você salve e atualize registros no banco de dados por meio de métodos de criação e atualização.

## Criando um modelo

Para criar um modelo, você pode utilizar o comando do Artisan make:model:

```php
php artisan make:model NomeDoModelo
```

## Fillaable

O atributo fillable define quais atributos podem ser preenchidos em massa. Por padrão, um modelo Eloquent não permitirá que você preencha nenhum atributo em massa. Portanto, você deve definir quais atributos do modelo devem ser preenchíveis. Você pode fazer isso definindo a propriedade fillable no modelo.

```php

<?php
   protected $fillable = [
        'name',
        'email'
    ];
```

## Hidden

O atributo hidden define uma lista de atributos que não devem ser incluídos em matrizes ou cadeias de caracteres serializadas quando o modelo é convertido em um array ou JSON.

```php
<?php
   protected $hidden = [
        'password',
        'remember_token'
    ];
```

## Connection

O atributo connection define a conexão de banco de dados que o modelo deve usar. Por padrão, todos os modelos usam a conexão padrão do banco de dados. Você pode definir uma conexão diferente para um modelo definindo a propriedade connection no modelo. A connection deverá ser configurada previamente no arquivo config/database.php.

```php
<?php
   protected $connection = 'connection-name';
```

## Table

O atributo table define a tabela de banco de dados que o modelo deve usar. Por padrão, o nome da tabela é o nome do modelo no formato snake_case. Você pode definir uma tabela diferente para um modelo definindo a propriedade table no modelo.

```php
<?php
   protected $table = 'table_name';
```


