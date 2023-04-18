# Aula 31: Vue Router (17 de abril - segunda-feira)

## Roteiro

- Configuração básica: Como instalar e configurar o Vue Router em seu projeto Vue 3.
- Definindo rotas: Como definir rotas no Vue Router e mapeá-las para componentes Vue.
- Navegação de rotas: Como navegar entre rotas usando métodos do Vue Router, como router-link ou programaticamente usando o método push.
- Parâmetros de rota: Como definir e acessar parâmetros de rota dinâmicos em suas rotas.
- Aninhamento de rotas: Como aninhar rotas no Vue Router e criar hierarquias de rota em seu aplicativo.
- Guardas de navegação: Como definir guardas de navegação para controlar o acesso a determinadas rotas com base nas permissões do usuário ou em outras condições.
- Transições de rota: Como adicionar animações e transições às mudanças de rota em seu aplicativo.
- Modos de Histórico: Como escolher entre os modos de Histórico do Vue Router, como o modo hash ou o modo history.

### Configuração básica

- Instalação:

```bash
npm install vue-router@4
```

### Definindo rotas

- Exemplo de definição de rota no arquivo `router.js`:

```js
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
```

### Navegação de rotas

- A navegação de rotas é um dos aspectos mais importantes do Vue Router no Vue 3. O Vue Router fornece vários métodos que permitem navegar entre as rotas do seu aplicativo. Dois dos métodos mais comuns são router-link e o método push.

- O componente router-link é um componente Vue que permite criar links de navegação em seu aplicativo. Você pode usar o router-link para criar links clicáveis para suas rotas. O router-link é fácil de usar e pode ser personalizado para atender às suas necessidades. Você pode passar propriedades adicionais para o router-link, como a classe CSS, o estilo e atributos personalizados.

- O método push é outro método importante do Vue Router para navegação programática. Você pode usar o método push para navegar para uma nova rota de forma programática, por exemplo, ao clicar em um botão. O método push adiciona uma nova entrada ao histórico do navegador e atualiza a URL do navegador para corresponder à nova rota. Isso permite que o usuário navegue para trás e para frente entre as rotas usando os botões de navegação do navegador.

- Além desses dois métodos, o Vue Router também oferece outros métodos de navegação, como o método replace, que substitui a entrada atual no histórico do navegador pela nova rota em vez de adicioná-la. Há também o método go, que permite navegar para trás ou para frente no histórico do navegador.

- Em resumo, a navegação de rotas é fundamental para criar aplicativos Vue 3 com múltiplas páginas e uma boa experiência do usuário. O Vue Router fornece vários métodos de navegação, incluindo router-link e push, que permitem que você navegue entre as rotas do seu aplicativo de forma fácil e intuitiva.

### Parâmetros de rota

- Os parâmetros de rota são uma parte importante do Vue Router. Os parâmetros de rota permitem que você defina rotas dinâmicas que podem ser acessadas com base em parâmetros de rota. Por exemplo, você pode criar uma rota que corresponda a um determinado usuário, como /user/1, /user/2, etc. Os parâmetros de rota são definidos usando dois pontos (:) antes do nome do parâmetro. Por exemplo, para definir uma rota que corresponda a um determinado usuário, você pode usar a seguinte sintaxe:

```js
  {
    path: '/user/:id',
    name: 'user',
    props: true,
    component: UserView
  }
```

- Observe que o valor do parâmetro de rota é passado como uma propriedade para o componente. É uma boa prática de segurança definir o tipo e as opções de validação para garantir que o valor seja do tipo esperado:

```
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created() {
    console.log(this.id) // valor do parâmetro de rota 'id'
  }
}
```

### Aninhamento de rotas

- O aninhamento de rotas permite que você crie hierarquias de rota em seu aplicativo Vue 3. Em vez de definir todas as rotas em um único nível, você pode agrupá-las em módulos ou recursos e definir rotas filhas que pertencem a cada módulo ou recurso.

- Para aninhar rotas, basta definir as rotas filhas dentro do objeto children da rota pai. Por exemplo, se você quiser definir rotas para gerenciar usuários e seus respectivos perfis, pode definir as rotas da seguinte maneira:

```
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      component: Users,
      children: [
        {
          path: '',
          component: UserList
        },
        {
          path: ':id',
          component: UserProfile,
          props: true
        }
      ]
    }
  ]
})
```

- Nesse exemplo, a rota /users é a rota pai e possui duas rotas filhas definidas no objeto children. A rota filha /users (rota vazia) é a rota padrão que será exibida quando a rota pai for acessada. A rota filha /users/:id é uma rota dinâmica que exibe o perfil do usuário correspondente ao ID passado como parâmetro de rota.

- Observe que a rota filha dinâmica usa a opção props: true para passar o valor do parâmetro de rota como uma propriedade para o componente correspondente. Isso permite que o componente acesse o valor do parâmetro de rota sem precisar acessar a propriedade params do objeto route.

- Em resumo, o aninhamento de rotas permite que você crie hierarquias de rota em seu aplicativo Vue 3. Você pode definir rotas filhas dentro do objeto children da rota pai e passar valores de parâmetros de rota como propriedades para os componentes correspondentes usando a opção props: true. O aninhamento de rotas é uma técnica poderosa para organizar rotas em módulos ou recursos em seu aplicativo.

### Guardas de navegação

- As guardas de navegação permitem que você controle o acesso a determinadas rotas em seu aplicativo Vue 3 com base em permissões de usuário ou outras condições. Com as guardas de navegação, você pode interceptar as solicitações de navegação do usuário antes que elas sejam tratadas pelo Vue Router e decidir se permitir ou negar o acesso à rota solicitada.

- Existem três tipos de guardas de navegação disponíveis no Vue Router:

- beforeEach: é executado antes de cada navegação de rota e permite que você verifique se o usuário tem as permissões necessárias para acessar a rota solicitada ou executar outras verificações de segurança.

- beforeResolve: é executado após todas as guardas de rota e antes que a rota correspondente seja renderizada. Isso permite que você execute qualquer código que precise ser concluído antes que a rota seja renderizada.

- afterEach: é executado após cada navegação de rota e permite que você execute qualquer código adicional após a conclusão da navegação.

- Para definir uma guarda de navegação, basta passar uma função para o método correspondente do Vue Router. Por exemplo, se você quiser verificar se o usuário tem permissão para acessar a rota /admin, pode definir uma guarda de navegação beforeEach da seguinte maneira:
  
```
  const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/admin',
      component: Admin,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica se o usuário está autenticado
    if (!isAuthenticated()) {
      // Redireciona para a página de login se não estiver autenticado
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      // Verifica se o usuário tem permissão para acessar a rota
      if (hasPermission(to)) {
        // Permite o acesso à rota
        next()
      } else {
        // Redireciona para uma página de erro ou para a página inicial
        next('/')
      }
    }
  } else {
    // Permite o acesso à rota sem verificações adicionais
    next()
  }
})
```
- Nesse exemplo, a rota /admin possui uma opção meta definida para indicar que a rota requer autenticação para acessá-la. Na função beforeEach, verificamos se a rota solicitada tem a opção meta.requiresAuth definida e, se for o caso, verificamos se o usuário está autenticado e tem permissão para acessar a rota. Se o usuário não estiver autenticado, redirecionamos para a página de login com um parâmetro de consulta redirect para que o usuário seja redirecionado de volta para a rota solicitada após o login.

- Em resumo, as guardas de navegação permitem que você controle o acesso a determinadas rotas em seu aplicativo Vue 3 com base em permissões de usuário ou outras condições. Você pode definir guardas de navegação usando os métodos beforeEach, beforeResolve e afterEach do Vue Router e interceptar as solicitações de nave


### Transições de rota

- As transições de rota permitem que você adicione animações e efeitos de transição às mudanças de rota em seu aplicativo Vue 3, melhorando a experiência do usuário ao navegar entre as páginas.

- Para adicionar transições de rota ao seu aplicativo Vue 3, você pode usar as classes de transição e animação do Vue. O Vue fornece várias classes de transição pré-construídas, como transition, transition-group, fade-transition e slide-up-transition, que podem ser aplicadas aos seus elementos de rota.

- Aqui está um exemplo de como usar a classe transition para adicionar uma transição simples de desvanecimento às mudanças de rota em seu aplicativo:

```
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"/>
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```
- Neste exemplo, envolvemos o componente router-view em uma tag transition e aplicamos a classe de transição fade a ela. Em seguida, definimos as classes CSS fade-enter-active, fade-leave-active, fade-enter e fade-leave-to para controlar a animação da transição. A classe fade-enter-active define a animação de entrada da transição, enquanto fade-leave-active define a animação de saída. As classes fade-enter e fade-leave-to controlam a opacidade do elemento durante a transição.

- Além da classe transition, você também pode usar a classe transition-group para aplicar transições a listas de elementos, como listas de itens em um carrinho de compras ou uma galeria de imagens.

- [Mais sobre transições de rota](https://vuejs.org/guide/built-ins/transition.html)

### Modos de Histórico

- O Vue Router oferece dois modos de histórico: o modo hash e o modo history. Cada um desses modos possui suas próprias vantagens e desvantagens, e cabe a você escolher o modo que melhor atende às necessidades do seu aplicativo.

#### Modo Hash:
- O modo hash usa o fragmento de URL após o símbolo "#" para gerenciar o histórico do navegador. O modo hash é compatível com todos os navegadores e não requer nenhuma configuração especial do servidor. No entanto, ele adiciona um caractere "#" extra à URL e pode causar problemas de SEO, pois os motores de busca podem ignorar o conteúdo após o "#" na URL.

- Para usar o modo hash, basta configurar o modo de histórico como "hash" na criação do objeto de roteamento:
  
```
  const router = createRouter({
  history: createWebHashHistory(),
  routes: [...]
})
```

#### Modo History:

- O modo history usa a API de histórico HTML5 do navegador para gerenciar o histórico de navegação. Ele não adiciona nenhum caractere extra à URL e é considerado uma solução mais limpa e amigável para SEO. No entanto, ele requer que o servidor esteja configurado para lidar com URLs de página única (SPA) e pode não ser compatível com todos os navegadores.

- Para usar o modo history, basta configurar o modo de histórico como "history" na criação do objeto de roteamento:
  
```
  const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})
```

- Em resumo, o modo hash é mais fácil de implementar e é compatível com todos os navegadores, mas pode causar problemas de SEO. O modo history é uma solução mais limpa e amigável para SEO, mas requer configurações adicionais no servidor e pode não ser compatível com todos os navegadores. A escolha do modo de histórico dependerá das necessidades específicas do seu aplicativo.
