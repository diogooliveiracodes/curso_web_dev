<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>{{ mensagem }}</h1>
                <button @click="toUpper" class="btn btn-primary">
                    Caixa Alta
                </button>
                <button @click="toLower" class="btn btn-success ms-2">
                    Caixa Baixa
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { ref } from 'vue'

export default {
    setup() {
        let mensagem = ref<string>('Modelo Novo')

        function toUpper() {
            mensagem.value = mensagem.value.toUpperCase()
        }

        function toLower() {
            mensagem.value = mensagem.value.toLowerCase()
        }

        return {
            mensagem,
            toUpper,
            toLower
        }
    }
}
</script>
