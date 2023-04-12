<template>
    <div>
        <h1>Counter : {{ counterFilho }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CounterFilho',
    props: {
        counterFilho: Number 
    }
})
</script>

<style scoped>

</style>