<template>
  <ListComponent />
  <AddComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListComponent from './components/ListComponent.vue';
import AddComponent from './components/AddComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    ListComponent, AddComponent
  }
});
</script>


