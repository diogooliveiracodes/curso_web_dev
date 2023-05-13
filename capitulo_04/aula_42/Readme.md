# Aula 42: Consultas e operações com o MySQL (12 de maio - sexta-feira)

### - Agrupamento e agregação: 

Usadas para agrupar os dados com base em uma ou mais colunas e realizar operações agregadas, como soma, média, máximo ou mínimo, usando cláusulas GROUP BY e funções de agregação, como SUM, AVG, MAX e MIN.

```sql
SELECT aluno_id, SUM(nota) AS total FROM notas GROUP BY aluno_id;
```

### - Visualização de dados:

Usada para criar uma tabela virtual com base nos resultados de uma consulta, usando a cláusula CREATE VIEW.

```sql
CREATE VIEW alunos_ativos AS
SELECT * FROM alunos 
WHERE status = 'ativo';
```

### - Subconsultas:

Usadas para aninhar uma consulta dentro de outra consulta, permitindo que você execute uma consulta mais específica dentro de uma consulta mais ampla.

```sql
SELECT * FROM alunos WHERE id IN (SELECT aluno_id FROM notas WHERE nota < 6);
```

### - Consultas com junção externa:

Usadas para combinar dados de duas ou mais tabelas, incluindo linhas que não possuem correspondência em uma ou mais tabelas, usando cláusulas LEFT JOIN, RIGHT JOIN ou FULL JOIN.

```sql
SELECT * FROM alunos
LEFT JOIN notas ON notas.aluno_id = alunos.id;
```