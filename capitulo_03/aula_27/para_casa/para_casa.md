# Para Casa - Capítulo 3 - Aula 27

## Exercício 1:

- Crie um componente chamado `HelloWorld` que exiba uma mensagem de boas-vindas. O componente deve receber uma propriedade chamada `name` que será o nome da pessoa que está recebendo a mensagem, esta propriedade deve ser passada pelo componente raiz App.vue.

## Exercício 2:

- Crie um componente chamado `Counter` que exiba um contador que inicia em 0 e incrementa a cada clique no botão.
- Adicione um botão de decrementar.
- Crie um elemento filho que exiba o valor do contador, importe este elemento no componente Counter.

## Exercício 3:

- Crie um componente chamado `TodoList` que exiba uma lista de tarefas.
- Crie um componente filho chamado `TodoItem` que exiba uma tarefa.
- O componente `TodoList` deve receber uma propriedade chamada `todos` que será um array de objetos, cada objeto deve conter uma propriedade `title` que será o título da tarefa.
- O componente `TodoItem` deve receber uma propriedade chamada `todo` que será um objeto que contém uma propriedade `title` que será o título da tarefa.
- O componente `TodoItem` deve exibir o título da tarefa recebida pela propriedade `todo`.
- O componente `TodoList` deve exibir uma lista de tarefas, cada tarefa deve ser um componente `TodoItem`.

## Bonus:

- Adicione ao exercício 3 um input e botão que adicionaram ítens a lista de tarefas.