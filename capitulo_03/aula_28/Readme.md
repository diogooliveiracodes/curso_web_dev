# Aula 28: Renderização condicional e listas  (10 de abril - segunda-feira)

## Objetivos

- Renderização condicional no Vue 3.
- Renderização de listas no Vue 3.

## Renderização Condicional:
- A Renderização Condicional é um recurso do Vue que permite renderizar elementos de forma condicional. O Vue oferece a diretiva v-if para lidar com renderização condicional, que é um cenário bem típico no desenvolvimento front-end. A diretiva v-if é usada para renderizar condicionalmente um bloco. O bloco só será renderizado se a expressão da diretiva retornar um valor verdadeiro.

### Exemplo de renderização condicional:
```
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```	


## Renderização de Listas:

- A Renderização de Listas é um recurso do Vue que permite renderizar uma lista de elementos com base nos dados de um Array. Podemos utilizar a diretiva v-for para renderizar uma lista de elementos com base nos dados de um Array. A diretiva requer uma sintaxe especial na forma de item in items, onde items é a fonte de dados e item é um apelido para o elemento que estiver sendo iterado.

### Exemplo de renderização de listas:

```
<li v-for="item in items">
  {{ item.message }}
</li>

data() {
  return {
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}
```
