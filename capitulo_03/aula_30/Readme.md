# Aula 30: Computed Properties e Watchers (14 de abril - sexta-feira)

## Objetivos

- Entender o conceito de computed properties no Vue 3.
- Entender o conceito de watchers no Vue 3.

## Computed Properties

- As computed properties são propriedades computadas que são usadas para calcular um valor com base em outras propriedades do componente. As computed properties são declaradas como funções dentro do objeto de opções do componente. O valor de uma computed property é armazenado em cache e atualizado apenas quando uma das propriedades computadas que ela depende é alterada. As computed properties são muito úteis para computar valores com base em outras propriedades do componente.

### Casos de uso das computed properties:

- Manipulação de dados: Computed Properties podem ser usadas para manipular dados e fornecer um valor calculado a partir de uma ou mais propriedades.

- Formatação de dados: As Computed Properties podem ser usadas para formatar dados de várias maneiras, como formatar datas ou números.

- Ordenação de dados: As Computed Properties podem ser usadas para classificar uma matriz de dados com base em uma determinada propriedade.

- Filtros de dados: As Computed Properties podem ser usadas para filtrar uma matriz de dados com base em uma determinada propriedade.

- Controle de estado: As Computed Properties podem ser usadas para controlar o estado de um componente e executar ações específicas com base nesse estado.

- Criação de classes dinamicamente: As Computed Properties podem ser usadas para criar classes dinamicamente com base no estado do componente.

- Validação de formulários: As Computed Properties podem ser usadas para validar dados de entrada do usuário em um formulário e exibir mensagens de erro em tempo real quando os dados são inválidos.

- Monitoramento de dados: As Computed Properties podem ser usadas para monitorar as alterações em uma ou mais propriedades e executar ações quando essas propriedades mudam.

- Criação de propriedades derivadas: As Computed Properties podem ser usadas para criar propriedades derivadas de uma ou mais propriedades existentes.

- Criação de lógica condicional: As Computed Properties podem ser usadas para criar lógica condicional e controlar o comportamento do componente com base em uma ou mais propriedades.

## Watchers

- Os watchers são funções que são executadas quando uma propriedade reativa é alterada. Os watchers são declarados como funções dentro do objeto de opções do componente. Os watchers são muito úteis para executar código quando uma propriedade reativa é alterada.

### Casos de uso dos watchers:

- Validar dados de entrada: Você pode usar watchers para validar dados de entrada do usuário em um formulário e exibir mensagens de erro em tempo real quando os dados são inválidos.

- Fazer cálculos reativos: Você pode usar watchers para monitorar as alterações em propriedades dependentes e executar cálculos reativos com base nesses valores.

- Atualizar componentes secundários: Se um componente depende de uma propriedade de outro componente, você pode usar watchers para atualizar o componente secundário sempre que a propriedade pai for atualizada.

- Fazer chamadas de API: Você pode usar watchers para fazer chamadas de API sempre que uma propriedade relevante for atualizada, como buscar dados de um servidor sempre que um filtro de pesquisa for alterado.

- Realizar animações: você pode usar watchers para monitorar o estado de uma propriedade e executar animações quando ela muda.

- Monitorar mudanças em propriedades complexas: quando uma propriedade complexa, como um objeto ou array, é alterada, os watchers podem ser usados para monitorar mudanças específicas dentro dela.

- Filtrar ou classificar dados: você pode usar watchers para monitorar a ordem ou a filtragem de dados em uma tabela, por exemplo, e atualizar a exibição conforme as mudanças ocorrem.

- Controlar eventos do navegador: você pode usar watchers para monitorar eventos do navegador, como mudanças na URL ou mudanças no histórico de navegação.

- Atualizar a exibição de dados em tempo real: quando os dados em sua aplicação mudam em tempo real (como em um aplicativo de bate-papo), os watchers podem ser usados para atualizar a exibição dos dados conforme eles chegam.

- Carregar dados assincronamente: quando você precisa carregar dados assincronamente em sua aplicação, os watchers podem ser usados para monitorar quando os dados estão prontos e atualizar a exibição conforme necessário.

- Ajustar o comportamento da interface do usuário com base no tamanho da tela: você pode usar watchers para monitorar o tamanho da tela e ajustar a exibição da interface do usuário com base nesse tamanho.

- Controlar o estado de um componente: os watchers podem ser usados para monitorar o estado de um componente e executar ações específicas com base nesse estado.

- Monitorar o estado do formulário: quando um formulário é preenchido pelo usuário, os watchers podem ser usados para monitorar as mudanças nos dados do formulário e executar ações com base nessas mudanças.

- Atualizar dados armazenados em cache: você pode usar watchers para monitorar alterações em dados armazenados em cache e atualizar a exibição conforme necessário.

Em geral, os watchers podem ser usados para qualquer caso de uso em que você precise executar uma lógica específica sempre que uma propriedade for alterada.

## Fontes:
- [site oficial vuejs](https://vuejs.org/guide/essentials/watchers.html)