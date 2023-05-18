USE aula_mysql;

SELECT * FROM alunos;
SELECT * FROM cursos;
SELECT * FROM disciplinas;
SELECT * FROM semestres;
SELECT * FROM notas;

SELECT aluno_id, SUM(nota) AS total FROM notas GROUP BY aluno_id;