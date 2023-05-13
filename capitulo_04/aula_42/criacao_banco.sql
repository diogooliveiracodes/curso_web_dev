CREATE DATABASE aula_mysql;

USE aula_mysql;

-- CRIA TABELA ALUNOS
CREATE TABLE alunos (
    id INT PRIMARY KEY ,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL
);

-- CRIA TABELA CURSOS
CREATE TABLE cursos (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- CRIA TABELA DISCIPLINAS
CREATE TABLE disciplinas (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- CRIA TABELA SEMESTRES
CREATE TABLE semestres (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- CRIA TABELA NOTAS
CREATE TABLE notas (
    id INT PRIMARY KEY,
    nota DECIMAL(5,2) NOT NULL,
    aluno_id INT NOT NULL,
    disciplina_id INT NOT NULL,
    semestre_id INT NOT NULL,
    FOREIGN KEY (semestre_id) REFERENCES semestres(id),
    FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

-- ADICIONA ALUNOS A TABELA ALUNOS
INSERT INTO
    alunos (id, nome, email, data_nascimento)
VALUES
    (1, 'João', 'joao@email.com', '1990-01-01'),
    (2, 'Maria', 'maria@email.com', '1990-01-01'),
    (3, 'José', 'jose@email.com', '1990-01-01');

-- ADICIONA CURSOS A TABELA CURSOS
INSERT INTO
    cursos (id, nome)
VALUES
    (1, 'PHP'),
    (2, 'JAVASCRIPT'),
    (3, 'JAVA');

-- ADICIONA DISCIPLINAS A TABELA DISCIPLINAS
INSERT INTO
    disciplinas (id, nome)
VALUES
    (1, 'Lógica de Programação'),
    (2, 'Variáveis'),
    (3, 'Estruturas de Controle'),
    (4, 'Estruturas de Repetição'),
    (5, 'Funções'),
    (6, 'Arrays'),
    (7, 'Orientação a Objetos');

-- ADICIONA SEMESTRES A TABELA SEMESTRES
INSERT INTO
    semestres (id, nome)
VALUES
    (1, 'Primeiro Semestre'),
    (2, 'Segundo Semestre');

-- ADICIONA NOTAS A TABELA NOTAS
INSERT INTO
    notas (id, nota, aluno_id, disciplina_id, semestre_id)
VALUES
    (1, 10, 1, 1, 1),
    (2, 9, 1, 2, 1),
    (3, 8, 1, 3, 1),
    (4, 7, 1, 4, 1),
    (5, 6, 1, 5, 1),
    (6, 5, 1, 6, 1),
    (7, 4, 1, 7, 1),
    (8, 10, 2, 1, 1),
    (9, 9, 2, 2, 1),
    (10, 8, 2, 3, 1),
    (11, 7, 2, 4, 1),
    (12, 6, 2, 5, 1),
    (13, 5, 2, 6, 1),
    (14, 4, 2, 7, 1),
    (15, 10, 3, 1, 1),
    (16, 9, 3, 2, 1),
    (17, 8, 3, 3, 1),
    (18, 7, 3, 4, 1),
    (19, 6, 3, 5, 1),
    (20, 5, 3, 6, 1),
    (21, 4, 3, 7, 1),
    (22, 10, 1, 1, 2),
    (23, 9, 1, 2, 2),
    (24, 8, 1, 3, 2),
    (25, 7, 1, 4, 2),
    (26, 6, 1, 5, 2),
    (27, 5, 1, 6, 2),
    (28, 4, 1, 7, 2),
    (29, 10, 2, 1, 2),
    (30, 9, 2, 2, 2),
    (31, 8, 2, 3, 2);