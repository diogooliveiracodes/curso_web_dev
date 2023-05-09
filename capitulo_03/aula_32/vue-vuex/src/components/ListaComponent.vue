<template>
    <div class="component">
        <p v-for="aluno in store.state.listaAlunos" :key="aluno.nome">
            {{ aluno.nome + " - "+ aluno.nota }} - {{ aluno.endereco }}
        </p>
    </div>
    <hr>
    <div class="component">
        <h2>Alterar notas</h2>
        <form @submit.prevent="alterarNota()">
            <div class="row justify-content-center">
                <div class="col-2">
                    <label>Index:</label>
                    <input type="text" name="indexAluno" required
                        v-model="indexAluno" class="form-control">
                </div>
                <div class="col-2">
                    <label>Nota:</label>
                    <input type="text" name="notaAluno" required
                        v-model="notaAluno" class="form-control">
                </div>
                <div class="row justify-content-center mt-2">
                    <button class="btn btn-primary">Alterar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    data () {
        return {
            store: useStore(),
            indexAluno: 0,
            notaAluno: 0
        }
    },
    methods: {
        alterarNota() {
            this.store.commit('alterarNota', {index: this.indexAluno, nota: this.notaAluno})
        }
    },
    // watch: {
    //     logNota(novo, velho){
    //         this.store.dispatch('logNota', {novo, velho})
    //     }
    // }
    // created() {
    //     this.store.dispatch('buscaAlunos')
    // }
})
</script>

<style scoped>

</style>