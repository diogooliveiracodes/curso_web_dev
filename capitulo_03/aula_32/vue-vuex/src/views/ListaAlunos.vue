<template>
  <div class="about" style="border: 1px solid blue; padding: 8px;">
    <h1>Lista de Alunos</h1>
    <ListaComponent />
    <hr>
    <h2>Definir Endereço do Aluno</h2>
    <form @submit.prevent="buscaCep()">
            <div class="row justify-content-center">
                <div class="col-2">
                    <label>Index:</label>
                    <input type="text" name="indexAluno" required
                        v-model="indexAluno" class="form-control">
                </div>
                <div class="col-5">
                    <label>Cep:</label>
                    <input type="text" name="cepAluno" required
                        v-model="cepAluno" class="form-control">
                </div>
                <div class="row justify-content-center mt-2">
                    <button class="btn btn-primary">Alterar</button>
                </div>
            </div>
        </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ListaComponent from '@/components/ListaComponent.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ListaDeAlunos',
  data() {
    return {
      store: useStore(),
      indexAluno: 0,
      cepAluno: 0
    }
  },
  components: {
    ListaComponent
  },
  methods: {
    buscaCep() {
      this.store.dispatch('buscaCep', {cep: this.cepAluno, index: this.indexAluno})
    }
  }
})
</script>
