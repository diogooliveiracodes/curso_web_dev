# Aula 41: Introdução ao MySQL (10 de maio - quarta-feira)

O MySQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto, amplamente utilizado para armazenar, gerenciar e recuperar dados. Ele foi desenvolvido inicialmente pela empresa sueca MySQL AB e, posteriormente, adquirido pela Oracle Corporation.

O MySQL é uma opção popular para aplicativos web e outros sistemas que exigem um banco de dados robusto, confiável e escalável. Ele é amplamente utilizado em conjunto com linguagens de programação como PHP, Python, Java e muitas outras.
<hr>

## Operações básicas: 

### - Criação de banco de dados:

Permite criar um novo banco de dados para armazenar tabelas e outros objetos relacionados.

```sql
CREATE DATABASE nome_do_banco_de_dados;
```

### - Criação de tabela:

É usada para criar uma nova tabela dentro de um banco de dados, definindo os nomes das colunas, tipos de dados, restrições e outras propriedades.

```sql
CREATE TABLE alunos (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL
);
```

### - Inserção de dados:

Permite adicionar novos registros a uma tabela existente, especificando os valores para cada coluna correspondente.

```sql
INSERT INTO alunos (id, nome, email, data_nascimento)
VALUES (1, 'João', 'joao@email.com', '1990-01-01');
```

### - Seleção de dados:

Usada para recuperar informações de uma tabela ou conjunto de tabelas com base em critérios específicos, usando a cláusula SELECT.

```sql
SELECT * FROM alunos WHERE id = 1 AND nome = 'João';
```

### - Atualização de dados:

Permite modificar os valores existentes em uma tabela, atualizando os registros com novos dados.

```sql
UPDATE alunos SET nome = 'João Silva' WHERE id = 1;
```

### - Exclusão de dados:

Usada para remover registros de uma tabela, de acordo com determinadas condições, usando a cláusula DELETE.

```sql
DELETE FROM alunos WHERE id = 1;
```

### - Modificação da estrutura da tabela:

Permite alterar a estrutura de uma tabela existente, adicionando, removendo ou modificando colunas, índices e outras propriedades.

```sql
ALTER TABLE alunos ADD COLUMN sobrenome VARCHAR(50) NOT NULL;
```

### - Junção de tabelas:

É usada para combinar dados de duas ou mais tabelas com base em uma condição de relacionamento, usando cláusulas JOIN.

```sql
SELECT * FROM alunos
INNER JOIN cursos ON cursos.aluno_id = alunos.id;
```

### - Classificação de resultados:

Permite ordenar os resultados da consulta em uma ordem específica, usando a cláusula ORDER BY.

```sql
SELECT * FROM alunos ORDER BY nome ASC;
```

### - Agrupamento e agregação: 

Usadas para agrupar os dados com base em uma ou mais colunas e realizar operações agregadas, como soma, média, máximo ou mínimo, usando cláusulas GROUP BY e funções de agregação, como SUM, AVG, MAX e MIN.

```sql
SELECT aluno_id, SUM(nota) AS total FROM notas GROUP BY aluno_id;
```
