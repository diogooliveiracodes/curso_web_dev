# Aula 43: Integrando PHP com MySQL - php PDO (15 de maio - segunda-feira)

## Objetivos

1. Entender o que é PDO
2. Conectar com o banco de dados
3. Executar comandos SQL
4. Entender o que são Prepared Statements

## PDO

O PHP PDO (PHP Data Objects) é uma extensão do PHP que fornece uma interface consistente e orientada a objetos para acessar diferentes bancos de dados, incluindo o MySQL. É uma camada de abstração que permite que você se conecte e interaja com bancos de dados de forma genérica, independentemente do banco de dados subjacente.

O PDO foi introduzido no PHP a partir da versão 5.1 e se tornou a escolha recomendada para trabalhar com bancos de dados devido às suas vantagens em relação às extensões de banco de dados mais antigas, como o mysql e o mysqli.

Algumas das principais características e benefícios do PHP PDO incluem:

- Suporte a múltiplos bancos de dados: O PDO oferece suporte a uma variedade de bancos de dados, incluindo MySQL, PostgreSQL, SQLite, Oracle, Microsoft SQL Server, entre outros. Isso permite que você escreva código mais portável e reutilizável, pois pode alternar facilmente entre diferentes bancos de dados sem precisar alterar drasticamente seu código.

- Interface orientada a objetos: O PDO fornece uma interface consistente e orientada a objetos para trabalhar com bancos de dados. Isso facilita a compreensão e a manutenção do código, além de permitir um maior reuso de classes e métodos.

- Prevenção de injeção de SQL: O PDO possui recursos embutidos para trabalhar com consultas parametrizadas, o que ajuda a evitar vulnerabilidades de segurança, como a injeção de SQL. As consultas parametrizadas usam placeholders para os valores dos parâmetros, eliminando a necessidade de concatenar diretamente os valores na consulta SQL.

- Tratamento consistente de erros: O PDO oferece um mecanismo consistente para o tratamento de erros, permitindo que você capture e trate exceções lançadas durante a execução das consultas. Isso simplifica o tratamento de erros e melhora a segurança e a confiabilidade do seu código.

- Suporte a transações: O PDO suporta transações, que permitem agrupar um conjunto de operações de banco de dados em uma unidade lógica. Isso é útil quando você precisa garantir a atomicidade e a consistência das operações, permitindo que você reverta todas as alterações caso ocorra algum erro.

Em resumo, o PHP PDO é uma extensão poderosa e flexível que facilita a integração do PHP com bancos de dados, oferecendo uma interface orientada a objetos, suporte a vários bancos de dados e recursos de segurança avançados.

## Conectando com o banco de dados

Para conectar com o banco de dados, você precisa criar uma instância da classe PDO, passando como parâmetros a string de conexão, o nome de usuário e a senha do banco de dados.

A string de conexão contém informações sobre o tipo de banco de dados, o nome do host e o nome do banco de dados. Por exemplo, para conectar-se ao banco de dados MySQL chamado mydb no host localhost, você pode usar a seguinte string de conexão:

```php
$dsn = 'mysql:host=localhost;dbname=aula_mysql';
```

A string de conexão acima especifica o tipo de banco de dados (mysql), o nome do host (localhost) e o nome do banco de dados (mydb).

A seguir, você pode ver um exemplo de código completo para conectar-se ao banco de dados MySQL usando o PHP PDO:

```php
<?php
$dsn = 'mysql:host=localhost;dbname=aula_mysql';
$username = 'root';
$password = '';

try {
    $conn = new PDO($dsn, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Connected successfully';
} catch(PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>
```

## Prepared Statements

Prepared statements (declarações preparadas) são recursos fornecidos por muitas linguagens de programação e bancos de dados para executar consultas SQL de forma segura e eficiente. Eles são especialmente úteis quando se trata de executar consultas SQL que envolvem parâmetros fornecidos pelos usuários.

Em vez de construir consultas SQL concatenando diretamente os valores dos parâmetros nas strings da consulta, como ocorre em consultas dinâmicas, as prepared statements separam a consulta SQL em duas partes:

A consulta SQL em si, contendo placeholders para os valores dos parâmetros. Os placeholders são geralmente representados por um símbolo especial, como "?" ou ":nome_parametro".

Os valores dos parâmetros que serão fornecidos posteriormente.

A ideia é que a consulta SQL seja preparada e compilada pelo banco de dados uma única vez, e depois reutilizada várias vezes com diferentes valores de parâmetros. Isso oferece alguns benefícios:

- Segurança contra injeção de SQL: Ao usar prepared statements corretamente, o banco de dados garante que os valores dos parâmetros sejam tratados como dados, não como parte da consulta SQL. Isso previne a injeção de SQL, que é uma vulnerabilidade comum em consultas dinâmicas.

- Desempenho otimizado: Como a consulta SQL é preparada e compilada apenas uma vez, o banco de dados pode reutilizar o plano de execução, o que pode resultar em melhor desempenho, especialmente para consultas executadas repetidamente com diferentes valores de parâmetros.

- Evita conversões de tipos de dados: As prepared statements permitem que você forneça explicitamente o tipo de dado para cada parâmetro. Isso evita conversões implícitas de tipos de dados, garantindo que os dados sejam tratados corretamente pelo banco de dados.

Para usar prepared statements em uma linguagem de programação, como PHP, você pode usar recursos específicos da linguagem ou bibliotecas, como o PHP PDO (PHP Data Objects) ou o MySQLi, que oferecem suporte para preparar consultas SQL e vincular os valores dos parâmetros aos placeholders antes de executar a consulta.

Em resumo, prepared statements são uma técnica de programação que permite a execução segura e eficiente de consultas SQL, separando a lógica SQL da entrada do usuário e proporcionando benefícios em termos de segurança e desempenho.

## Usando prepared statements com o PHP PDO

O PHP PDO oferece suporte a prepared statements por meio de dois métodos principais: prepare() e execute().

O método prepare() prepara a consulta SQL para execução e retorna um objeto PDOStatement. O objeto PDOStatement pode ser usado para executar a consulta SQL várias vezes com diferentes valores de parâmetros.

O método execute() executa a consulta SQL preparada com os valores dos parâmetros fornecidos. Ele retorna true em caso de sucesso ou false em caso de falha.

A seguir, você pode ver um exemplo de código completo que usa prepared statements para inserir dados em uma tabela MySQL:

```php
<?php
$dsn = 'mysql:host=localhost;dbname=aula_mysql';
$username = 'root';
$password = '';

try {
    $conn = new PDO($dsn, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = 'INSERT INTO alunos (id, nome, email, data_nascimento) VALUES (:id, :nome, :email, :data_nascimento)';
    $stmt = $conn->prepare($sql);

    $stmt->execute([
        'id' => 4,
        'nome' => 'John Doe',
        'email' => 'pedro@email.com',
        'data_nascimento' => '1990-01-01'
    ]);

    echo $stmt->rowCount();

} catch(PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}
?>
```

## Fontes

- [PHP PDO: Conectando com o banco de dados](https://www.php.net/manual/en/pdo.construct.php)
