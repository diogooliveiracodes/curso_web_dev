<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="row justify-content-between">
      <div v-for="product in getProducts" :key="product.id" 
        class="col-10 offset-1 mt-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ product.nome }}</h5>
            <p class="card-text">
              {{ product.descricao }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <AddProdutoComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
import AddProdutoComponent from "@/components/AddProdutoComponent.vue";

export default defineComponent({
  name: "DashboardView",
  data(){
    return {
      store: useStore()
    }
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  created() {
    this.store.dispatch("fetchProducts")
  },
  components:{AddProdutoComponent}
});
</script>
