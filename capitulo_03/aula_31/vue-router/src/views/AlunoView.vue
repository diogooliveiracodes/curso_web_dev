<template>
  <div class="aluno">
    <h1 style="color: blue">Detalhes do Aluno</h1>
    <h3>Nome: {{ listaAlunos[id].nome }}</h3>
    <h3>Idade: {{ listaAlunos[id].idade }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlunoView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      listaAlunos: [
        {},
        { id: 1, nome: "João", idade: 20 },
        { id: 2, nome: "Maria", idade: 21 },
        { id: 3, nome: "José", idade: 22 },
        { id: 4, nome: "Ana", idade: 23 },
        { id: 5, nome: "Pedro", idade: 24 },
      ],
    };
  }
});
</script>
