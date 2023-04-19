<template>
  <div class="home">
<<<<<<< HEAD
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
=======
    <!-- <h1 style="color: red">{{msg}}</h1> -->
    <h1>Home</h1>

    <button @click="mostrarTexto = !mostrarTexto">Mostrar Texto</button>
    <Transition name="my-transition" mode="out-in">
      <p v-if="mostrarTexto">Este é o texto</p>
    </Transition>
>>>>>>> main
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
<<<<<<< HEAD
  name: 'HomeView',
  components: {
    HelloWorld,
  },
=======
  name: "HomeView",
  data() {
    return {
      mostrarTexto: true
    }
  }
  // props: {
  //   msg: {
  //     type: String,
  //     required: true,
  //   },
  // }
>>>>>>> main
});
=======
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
>>>>>>> e533a7bc678ace2213a5b38289239034cfbb6deb
</script>

<style>

.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}

</style>