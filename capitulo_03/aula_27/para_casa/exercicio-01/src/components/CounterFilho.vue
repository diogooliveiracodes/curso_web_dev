<template>
    <div>
        <h2>Contador: {{ counterfilho }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CounterFilho',
    props: {
        counterfilho: Number
    }
})
</script>

<style scoped>

</style>