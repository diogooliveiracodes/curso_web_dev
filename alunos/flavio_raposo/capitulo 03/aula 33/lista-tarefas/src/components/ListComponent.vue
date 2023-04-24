<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <h1>Lista de Tarefas</h1>
                <div class="form-group">
                    <label for="">Pesquisa por nome:</label>
                    <input type="text" class="form-control" name="busca" id="busca" v-model="busca">
                </div>
                <p v-for="item in store.state.listaDeTarefas" :key="item.id">
                    {{ item.id }} - {{ item.nome }} -
                    <span v-if="item.check"><i class="bi bi-check text-success"></i></span>
                    <span v-else><i class="bi bi-x-lg text-danger"></i></span>
                    <button  @click="removeTarefa(item.id)" class="btn btn-danger btn-sm ms-2">Remover</button>
                </p>
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
            busca:''
        }
    },
    methods: {
        removeTarefa (id: number) {
            this.store.dispatch('removeTarefa', id)
        }
    },
    computed: {
        buscaLista(){
            return this.store.state.listaDeTarefas.filter((item:any) => item.nome.toLowerCase().includes(this.busca.toLowerCase()))

            }
        }
    }
)
</script>

