# Aula 29: Ciclo de vida e Hooks (12 de abril - quarta-feira)

## Objetivos

- Entender o ciclo de vida de um componente no Vue 3.
- Entender o conceito de Hooks no Vue 3.

## Ciclo de vida de um componente

- O ciclo de vida de um componente no Vue 3 é uma sequência de etapas que ocorrem durante a criação, atualização e destruição de um componente Vue. Essas etapas são representadas por uma série de hooks ou ganchos, que são funções que o Vue chama em momentos específicos do ciclo de vida do componente.

### O ciclo de vida de um componente Vue 3 é composto por três fases principais:

- Criação: durante essa fase, o Vue cria a instância do componente e configura suas propriedades e eventos. Os hooks de criação são: "beforeCreate", "created", "beforeMount" e "mounted".

- Atualização: durante essa fase, o Vue atualiza o componente quando suas propriedades ou estados mudam. Os hooks de atualização são: "beforeUpdate" e "updated".

- Destruição: durante essa fase, o Vue remove o componente da página e limpa os recursos que ele usou. O hook de destruição é "beforeUnmount".

## Hooks

- Os hooks são funções pré-definidas no Vue que são chamadas automaticamente em pontos específicos do ciclo de vida de um componente. Os hooks permitem que você execute código personalizado em momentos específicos do ciclo de vida de um componente, como quando ele é criado, atualizado ou destruído.

### Os hooks no Vue 3 são divididos em três categorias:

- Hooks de criação: são chamados quando um componente é criado. Os hooks de criação são: "beforeCreate", "created", "beforeMount" e "mounted".
- Hooks de atualização: são chamados quando um componente é atualizado. Os hooks de atualização são: "beforeUpdate" e "updated".
- Hooks de destruição: são chamados quando um componente é destruído. O hook de destruição é "beforeUnmount".

## Fontes:
- [site oficial vuejs](https://vuejs.org/guide/essentials/lifecycle.html)