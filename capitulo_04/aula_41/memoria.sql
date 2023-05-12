USE aula_mysql;

CREATE TABLE alunos (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL
);

CREATE TABLE cursos (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO cursos (id, nome) VALUES (2, 'JAVASCRIPT'), (3, 'PHP');
 
# CRUD - CREATE READ UPDATE DELETE

INSERT INTO alunos (id, email, nome, data_nascimento)
VALUES 	(2, 'maria@email.com','Maria', '1990-01-01'),
			(1, 'joao@email.com','Joao', '1990-01-01');
			
SELECT id, nome, email FROM alunos WHERE id > 1 AND nome = 'Maria';
SELECT * FROM alunos;
SELECT * FROM cursos;

UPDATE alunos SET data_nascimento = '1995-11-01' WHERE id <= 2;
UPDATE alunos
SET data_nascimento = '1992-02-12'
WHERE id > 1;

DELETE FROM alunos 
WHERE id = 2 
	AND nome = 'Maria' 
	OR data_nascimento = '2001-01-05';
	
	
ALTER TABLE alunos 
ADD COLUMN curso_id INT REFERENCES cursos(id);

SELECT alunos.nome_aluno, alunos.email, cursos.nome FROM alunos
INNER JOIN cursos ON cursos.id = alunos.curso_id
WHERE alunos.nome_aluno = 'Maria';

SELECT * FROM alunos ORDER BY data_nascimento DESC;