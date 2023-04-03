<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Contador"/>
    <NovoComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import NovoComponent from '@/components/NovoComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld, 
    NovoComponent
  },
});
</script>
