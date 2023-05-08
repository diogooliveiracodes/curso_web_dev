<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <h1>Lista de tarefas</h1>
                <div class="form-group">
                  <label for="">Buscar Por Nome:</label>
                  <input v-model="search" 
                    type="text" class="form-control" name="search" id="search">
                </div>
                <p v-for="item in filteredList" :key="item.id"
                    class="mt-2">
                    {{ item.id }} - {{ item.nome }} - 
                    <span v-if="item.check"><i class="fas fa-check text-success"></i></span>
                    <span v-else><i class="fas fa-times-circle text-danger"></i></span>
                    <button @click="removeItemById(item.id)" class="btn btn-danger btn-sm ms-2">Remover</button>
                </p>
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
            search: ''
        }
    },
    methods: {
        removeItemById(id: number) {
            this.store.dispatch('removeItemById', id)
        }
    },
    computed: {
        filteredList() {
            return this.store.state.todoList.filter((item: any) => 
                item.nome.toLowerCase().includes(this.search.toLowerCase()))
        }
    }
})
</script>

<style scoped>

</style>