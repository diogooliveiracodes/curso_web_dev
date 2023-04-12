<template>
    <div>
        <CounterFilho v-bind:counterFilho = "counter"/>
        <button @click="counter++">Adicionar 1</button>
        <button @click="counter--">Diminuir 1</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CounterFilho from './CounterFilho.vue';

export default defineComponent({
    name: 'CounterParaCasa',
    components: {
        CounterFilho
    },
    data () {
        return {
            counter: 0
        }
    }
})
</script>

<style scoped>

</style>