<template>
  <div class="hello">
    <p >
      Contador: {{ count }}
      <br>
      <button class="btn btn-primary" @click="count++">+1</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  data: () => ({
    count: 0,
  }),
});
</script>

<style>
p {
  font-size: 2em;
  text-align: center;
}
</style>


