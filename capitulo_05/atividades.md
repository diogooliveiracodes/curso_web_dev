# Atividades Laravel

## Projeto Captação de Leads

### 1. Crie um projeto Laravel utilizando o composer, crie duas rotas, uma para a página inicial e outra para a página de contato. Crie também uma view para cada rota.

### 2. Adicione um formulário na página de contato com os campos nome, e-mail e mensagem. Crie uma migration para criar uma tabela de contatos no banco de dados com os campos nome, e-mail e mensagem. Crie um model para a tabela de contatos. Crie um controller para a página de contato. Crie um método para salvar os dados do formulário no banco de dados.

### 3. Adicione uma nova rota que responderá na função `index` retornando uma view com uma tabela que exibirá todos os contatos cadastrados no banco de dados. Utilize o método `all` do model para retornar todos os contatos cadastrados no banco de dados. Não se esqueça de configurar o $fillable no model para que o método `create` e `all` funcione corretamente.

<hr>

## Projeto To Do List

### 1. Crie um projeto Laravel utilizando o composer, crie duas rotas, uma para a página inicial e outra para a página de tarefas. Crie também uma view para cada rota.

### 2. Crie os recursos Model, Controller, Migration, Seeder, Factory e Routes para o recurso Tarefa. A tabela de tarefas deve conter os campos `nome`, `descricao`, `data_limite_conclusao` e `concluida`. O campo `concluida` deve ser do tipo `boolean` e deve ser `false` por padrão. O campo `data_limite_conclusao` deve ser do tipo `date`. O campo `nome` deve ser do tipo `string` e ter no máximo 100 caracteres. O campo `descricao` deve ser do tipo `text`.

### 3. Crie um formulário na página de tarefas com os campos nome, descrição e data limite de conclusão. Crie uma rota para salvar os dados do formulário no banco de dados. Crie um método no controller para salvar os dados do formulário no banco de dados.

### 4. Crie uma rota para exibir uma tabela com todas as tarefas cadastradas no banco de dados. Crie um método no controller para retornar todas as tarefas cadastradas no banco de dados. Crie uma view para exibir a tabela com todas as tarefas cadastradas no banco de dados.

Criando os recursos:

```bash
php artisan make:model Tarefa -mcrsf
```

Definindo as rotas:

```php
Route::resource('tarefas', [TarefaController::class]);
```
### Bônus 1: Crie um seeder para criar 10 tarefas falsas no banco de dados.
### Bônus 2: Adicione a funcionalidade de marcar as tarefas como concluídas.