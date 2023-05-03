# Aula 32: Gerenciamento de estado com Vuex 1 (18 de abril - terça-feira)

## Objetivos

- O que é Vuex?
- Quando usar o Vuex?
- Instalação.
- O que é um store?
- Entender o que são getters
- Entender o que são mutations
- Entender o que são actions

## O que é Vuex?

- O Vuex é um padrão de gerenciamento de estado + biblioteca para aplicações Vue.js. Ele serve como um store centralizado para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mudado de forma previsível.

## Quando usar o Vuex?

- Embora o Vuex nos ajude a lidar com o gerenciamento de estado compartilhado, ele também vem com o custo de mais conceitos e códigos repetitivos. É uma escolha de prós e contras entre produtividade de curto e longo prazo

- Se você nunca construiu um SPA em grande escala e for direto para o Vuex, ele pode parecer verboso e desanimador. Isso é perfeitamente normal - se a sua aplicação é simples, você provavelmente ficará bem sem o Vuex. Um simples store pattern pode ser tudo que você precisa. Mas, se você está criando um SPA de médio a grande porte, é provável que tenha encontrado situações que fazem você pensar em como lidar melhor com o estado fora de seus componentes Vue, e o Vuex será naturalmente o próximo passo para você.

## Instalação

- Na raiz do projeto, execute o comando:

```bash
npm install vuex --save
```

## O que é um store?

- No centro de cada aplicação Vuex existe o store. Um "store" é basicamente um contêiner que mantém o estado da sua aplicação. Há duas coisas que tornam um store Vuex diferente de um objeto global simples:

- Os stores Vuex são reativos. Quando os componentes do Vue obtêm o estado dele, eles atualizarão de forma reativa e eficiente se o estado do store mudar.

- Você não pode alterar diretamente os estados do store. A única maneira de mudar o estado de um store é explicitamente confirmando (ou fazendo commit de) mutações. Isso garante que cada mudança de estado deixe um registro rastreável, e permite ferramentas que nos ajudem a entender melhor nossas aplicações.

## Entender o que são getters

- Os getters são como propriedades computadas para stores. Às vezes, talvez precisemos calcular o estado derivado com base no estado do store, por exemplo, filtrar através de uma lista de itens e contá-los:

```js
const store = createStore({
  state: {
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },
  },
});
```

## Entender o que são mutations

- No Vuex, as mutações são funções síncronas responsáveis por modificar o estado da aplicação. Elas são a única forma de modificar o estado no Vuex e servem como uma espécie de "porta de entrada" para as alterações no estado.

- As mutações são definidas em um objeto chamado "mutations" dentro de um módulo Vuex e são acionadas através da chamada do método "commit" em uma instância do Vuex. Quando uma mutação é acionada, ela recebe o estado atual da aplicação como primeiro parâmetro, seguido de um ou mais parâmetros opcionais que representam os dados a serem modificados.

- É importante notar que as mutações devem ser síncronas e não devem realizar operações assíncronas ou efeitos colaterais diretamente. Para operações assíncronas ou operações que produzem efeitos colaterais, deve-se usar as "actions" do Vuex. As mutações são uma forma segura e previsível de atualizar o estado da aplicação e garantir a consistência dos dados em todo o aplicativo.

```js
const store = createStore({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // muda o estado
      state.count++
    }
  }
})
```

## Entender o que são actions

- As actions são funções assíncronas que podem ser usadas para modificar o estado da aplicação. Elas são definidas em um objeto chamado "actions" dentro de um módulo Vuex e são acionadas através da chamada do método "dispatch" em uma instância do Vuex. Quando uma action é acionada, ela recebe o estado atual da aplicação como primeiro parâmetro, seguido de um ou mais parâmetros opcionais que representam os dados a serem modificados.

```js
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```
