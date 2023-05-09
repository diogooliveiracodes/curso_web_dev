<template>
  <br />
  <AntigoComponent />
  <!-- <br>
  <NovoComponent />
  <br>
  <NovoEspertoComponent /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AntigoComponent from "./components/AntigoComponent.vue";
// import NovoComponent from './components/NovoComponent.vue';
// import NovoEspertoComponent from './components/NovoEspertoComponent.vue';

export default defineComponent({
  name: "App",
  components: {
    AntigoComponent,
    // NovoComponent, NovoEspertoComponent
  },
});
</script>

<style></style>
