<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>{{ state.mensagem }}</h1>
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

<script setup lang="ts">

import { reactive } from 'vue'

const state = reactive({
    mensagem: 'Modelo Novo Esperto'
})

function toUpper() {
    state.mensagem = state.mensagem.toUpperCase()
}

function toLower() {
    state.mensagem = state.mensagem.toLowerCase()
}

</script>
