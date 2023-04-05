<template>
  <div class="container">
    <h1>{{ hello }}</h1>
    <form @submit.prevent="imprimeConsole">
      <input type="text" v-model="mensagem" :class="classeInput">
      <button :class="classeButton">Imprimir</button>
      <div v-if="exibir">
        <p class="text-danger mt-2">{{ mensagem.toUpperCase() }}</p>
      </div>
      <button @click="imprimeConsole" :class="classeButton">Imprimir</button>
    </form>
    <!-- <p>{{ contador }}</p>

    <button @click="contador++" :class="classeButton">+</button>
    <p v-if="contador < 10">Menor que 10</p>
    <p v-else-if="contador >= 10 && contador <=20">Você está entre 10 e 20</p>
    <p v-else>Maior que 20</p> -->
    <!-- <input type="text" v-model="mensagem" :class="classeInput">
    <button :class="classeButton" @click="inserirItem">Inserir</button>
    <ul>
      <li v-for="item in lista" :key="item">
        {{ item }}
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      contador: 0,
      hello: 'Diretivas Vue',
      mensagem: '',
      classeButton: 'btn btn-primary mt-2',
      classeInput: 'form-control',
      exibir: false,
      lista: [] as string[]
    }
  },
  methods: {
    imprimeConsole() {
      // alert(this.mensagem)
      this.exibir = true;
      this.classeButton = 'btn btn-danger mt-2';
    },
    inserirItem() {
      this.lista.push(this.mensagem)
    }
  }
});
</script>
