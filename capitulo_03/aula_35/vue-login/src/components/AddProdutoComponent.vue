<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Produto</h3>
      </div>
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-4">
            <form @submit.prevent="addProduto">
              <div class="mb-3">
                <label for="quantidade" class="form-label">Id:</label>
                <input v-model="id" type="number" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="nome" class="form-label">Nome:</label>
                <input
                  v-model="nome"
                  type="text"
                  class="form-control"
                  name="nome"
                />
              </div>
              <div class="mb-3">
                <label for="descricao" class="form-label">Descrição:</label>
                <input v-model="descricao" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="preco" class="form-label">Preço:</label>
                <input v-model="preco" type="number" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="quantidade" class="form-label">Quantidade:</label>
                <input
                  v-model="quantidade"
                  type="number"
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary">Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AddProdutoComponent",
  data() {
    return {
      store: useStore(),
      id: 0,
      nome: "",
      descricao: "",
      preco: 0,
      quantidade: 0,
    };
  },
  methods: {
    addProduto() {
      this.store.dispatch("addProduto", {
        id: this.id,
        nome: this.nome,
        descricao: this.descricao,
        preco: this.preco,
        quantidade: this.quantidade,
      });
    },
  },
});
</script>

<style scoped></style>
