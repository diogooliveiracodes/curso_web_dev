<template>
  <!-- BÁSICO DE ROTAS -->
  <!-- <nav>
    <a href="/">Home Recarregando</a> |
    <router-link to="/">Home</router-link> |
    <router-link to="/sobre">About</router-link>
  </nav>
  <div style="border: 1px solid black; padding: 20px">
    <router-view />
  </div> -->

  <!-- PASSAGEM DE PARÂMETROS -->
  <!-- <div>
    <h1>Lista de Alunos</h1>
    <ul>
      <li v-for="aluno in listaAlunos" :key="aluno.id">
        {{ aluno.nome }} - 
          <RouterLink :to="'/aluno/' + aluno.id">Detalhes</RouterLink>
      </li>
    </ul>
  </div> -->

  <!-- ROTAS ANINHADAS -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/curso/modulos">Curso</router-link>
  </nav>
  <div style="border: 1px solid red; padding: 8px;">
    <router-view />
  </div>

  <!-- <HomeView msg="Outra coisa" /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  name: "App",
  // components: {
  //   HomeView,
  // },
  data() {
    return {
      listaAlunos: [
        { id: 1, nome: "João", idade: 20 },
        { id: 2, nome: "Maria", idade: 21 },
        { id: 3, nome: "José", idade: 22 },
        { id: 4, nome: "Ana", idade: 23 },
        { id: 5, nome: "Pedro", idade: 24 },
      ],
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
