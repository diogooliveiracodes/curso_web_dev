<template>
  <div class="home">
    <!-- <h1 style="color: red">{{msg}}</h1> -->
    <h1>Home</h1>

    <button @click="mostrarTexto = !mostrarTexto">Mostrar Texto</button>
    <Transition name="my-transition" mode="out-in">
      <p v-if="mostrarTexto">Este é o texto</p>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
});
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