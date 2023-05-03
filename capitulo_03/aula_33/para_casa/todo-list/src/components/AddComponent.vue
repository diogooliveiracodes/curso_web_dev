<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card">
                    <form @submit.prevent="addItemMethod">
                        <div class="card-body">
                            <h4 class="card-title">Adicionar Nova Tarefa</h4>
                            <div class="form-group mt-2">
                              <label for="">ID:</label>
                              <input v-model="id" type="number" class="form-control" name="id" id="id">
                            </div>
                            <div class="form-group mt-2">
                              <label for="">Tarefa:</label>
                              <input v-model="nome" type="text" class="form-control" name="nome" id="nome">
                            </div>
                            <div class="form-group mt-2">
                              <label for="">Data:</label>
                              <input v-model="data" type="date" name="data" id="data" class="form-control">
                            </div>
                            <div class="form-check">
                              <label class="form-check-label">
                                <input v-model="check" :checked="check" 
                                    type="checkbox" class="form-check-input" name="check" id="check">
                                Tarefa Concluída
                              </label>
                            </div>
                            <button class="btn btn-primary mt-2" type="submit">Adicionar</button>
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
    data () {
        return {
            store: useStore(),
            id: 0,
            nome: '',
            data: '',
            check: false
        }
    },
    methods: {
        addItemMethod() {
            this.store.commit('addItemMutation', {
                id: this.id,
                nome: this.nome,
                data: this.data,
                check: this.check
            })
        }
    }
})
</script>

<style scoped>

</style>