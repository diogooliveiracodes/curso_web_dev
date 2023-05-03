<template>
    <div>
        <h1>Curso Web Dev</h1>
    </div>
    <nav>
        <router-link to="/curso/modulos">Módulos</router-link> |
        <router-link to="/curso/descricao">Descrição</router-link>
    </nav>
    <div style="border: 1px solid green">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CursoView',

})
</script>

<style scoped>

</style>