<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card">
                    <form @submit.prevent="addTarefa">
                        <div class="card-body">
                            <h4 class="card-title">Adicionar Tarefa</h4>
                            <div class="form-group mt-2">
                                <label for="">ID:</label>
                                <input v-model="id" type="number" class="form-control">
                            </div>
                            <div class="form-group mt-2">
                                <label for="">Tarefa:</label>
                                <input v-model="nome" type="text" class="form-control">
                            </div>
                            <div class="form-group mt-2">
                                <label for="">Data:</label>
                                <input v-model="data" type="date" class="form-control">
                            </div>
                            <div class="form-check mt-2">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="check" :checked="check">
                                    Tarefa Finalizada
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary mt-2">Adicionar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
    data() {
        return {
            store: useStore(),
            id: 0,
            nome: '',
            data: '',
            check: false
        }
    },
    methods: {
        addTarefa() {
            this.store.commit('addTarefa', {
                id: this.id,
                nome: this.nome,
                data: this.data,
                check: this.check
            })
        }
    }
})
</script>

