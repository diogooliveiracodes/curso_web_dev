<template>
    <div>
        <CounterFilho :counterfilho="counter" />
        <button @click="increment">Incrementar 5</button>
        <button @click="counter--">Decrementar 1</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CounterFilho from './CounterFilho.vue'

export default defineComponent({
    name: 'CounterComponent',
    components: {
        CounterFilho
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter += 5
        }
    }
})
</script>

<style scoped>

</style>