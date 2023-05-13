# Exercícios Vuex

## Exercício 1
- Crie um componente que exiba uma lista de tarefas com: 
{id: number, nome: string, data: string, check: boolean}.
- Adicione um campo de texto para adicionar uma nova tarefa.
- Adicione um botão para remover uma tarefa.
- Adicione um campo de filtro para filtrar as tarefas pelo nome.

## Exercício 2
- Crie um componente que exiba uma lista de cards de produtos com.
- Crie um componente de carrinho de compras.
- Adicione um botão para adicionar um produto ao carrinho.
- Adicione um botão para remover um produto do carrinho.
- Adicione um botão para limpar o carrinho.
- Adicione um campo de filtro para filtrar os produtos pelo nome.
- Bonus: Crie uma paginação para exibir os produtos.

## Exercício 3 (utilizando vue Router)
- Crie um componente com uma lista de clientes (View Home).
- Crie um componente que adicione novos clientes (View AddClient).
- Crie um componente que edite os clientes (View EditClient).
- Adicione um formulário na view EditClient para fazer uma requisição a Api de busca de CEP para preencher o endereço do cliente apenas com o CEP.

## Desafio
- Aprenda a utilizar o JSON Server para criar uma API fake.
- Conectar os exercícios anteriores ao Json Server.
- Toda alteração que for feita na store deverá refletir no servidor.

```js
fetch('http://localhost:3000/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```