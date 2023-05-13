<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <FilhoDoAntigoComponent 
                    :novonome="mensagem" 
                    :contador="contador" />
                <button @click="toUpper" class="btn btn-primary">
                    Caixa Alta
                </button>
                <button @click="toLower" class="btn btn-success ms-2">
                    Caixa Baixa
                </button>
                <button @click="contador++" class="btn btn-danger ms-2">
                    +1
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilhoDoAntigoComponent from './FilhoDoAntigoComponent.vue';

export default defineComponent({
    components:{
        FilhoDoAntigoComponent
    },
    data() {
        return {
            mensagem: 'Olá Mundo',
            contador: 0
        }
    },
    methods: {
        toUpper() {
            this.mensagem = this.mensagem.toUpperCase()
        },
        toLower() {
            this.mensagem = this.mensagem.toLowerCase()
        }
    },
})
</script>
