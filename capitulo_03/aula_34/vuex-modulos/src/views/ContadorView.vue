<template>
  <div class="contador">
    <h1>Contador: {{ getCounter }}</h1>
    <button @click="store.dispatch('incrementCounter')">Increment</button>
    <button @click="store.dispatch('decrementCounter')">Decrement</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore, mapGetters, mapActions } from 'vuex'

export default defineComponent({
  name: 'ContadorView',
  data() {
    return {
      store: useStore()
    }
  },
  computed: {
    ...mapGetters(['getCounter']),
    // ...mapActions(['incrementCounter', 'decrementCounter'])
  }
})
</script>