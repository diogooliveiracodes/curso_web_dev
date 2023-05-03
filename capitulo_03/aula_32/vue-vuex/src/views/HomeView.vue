<template>
  <div class="home">
    <h2>Alunos Aprovados:</h2>  

    <p v-for="aluno in store.getters.alunosAprovados" :key="aluno.id">
      {{ aluno.nome }}
    </p>
    <hr>
    <h2>Alunos Reprovados:</h2>
    <p v-for="aluno in store.getters.alunosReprovados" :key="aluno.id">
      {{ aluno.nome }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      store: useStore()
    }
  }
});
</script>
