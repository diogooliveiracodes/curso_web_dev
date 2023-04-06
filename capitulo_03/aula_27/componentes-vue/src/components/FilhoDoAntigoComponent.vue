<template>
    <div>
        <h1>{{novonome}}</h1>
        <h2>{{contador}}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['novonome', 'contador']
})


</script>

<style scoped>
div{
    border: 1px solid red
}
</style>