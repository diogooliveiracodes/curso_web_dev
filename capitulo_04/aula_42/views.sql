CREATE VIEW boletim AS
SELECT
    aluno_id,
    SUM(nota) AS total
FROM
    notas
GROUP BY
    aluno_id;

CREATE VIEW alunos_notas AS
SELECT
    alunos.nome AS NOME,
    disciplinas.nome AS DISCIPLINA,
    notas.nota AS NOTA
FROM
    alunos
    INNER JOIN notas ON notas.aluno_id = alunos.id
    INNER JOIN disciplinas ON disciplinas.id = notas.disciplina_id;

CREATE VIEW alunos_aprovados AS
SELECT
    alunos.nome AS NOME,
    disciplinas.nome AS DISCIPLINA,
    notas.nota AS NOTA
FROM
    alunos
    INNER JOIN notas ON notas.aluno_id = alunos.id
    INNER JOIN disciplinas ON disciplinas.id = notas.disciplina_id
WHERE
    notas.nota >= 7;

CREATE VIEW alunos_reprovados AS
SELECT
    alunos.nome AS NOME,
    disciplinas.nome AS DISCIPLINA,
    notas.nota AS NOTA
FROM
    alunos
    INNER JOIN notas ON notas.aluno_id = alunos.id
    INNER JOIN disciplinas ON disciplinas.id = notas.disciplina_id
WHERE
    notas.nota < 7;

CREATE VIEW right_join AS
SELECT
    alunos.nome AS NOME,
    disciplinas.nome AS DISCIPLINA,
    notas.nota AS NOTA
FROM
    alunos
    RIGHT JOIN notas ON notas.aluno_id = alunos.id
    RIGHT JOIN disciplinas ON disciplinas.id = notas.disciplina_id;

-- DROP VIEW alunos_notas;
SELECT * FROM boletim;
SELECT * FROM alunos_notas;
SELECT * FROM alunos_aprovados;
SELECT * FROM alunos_reprovados;