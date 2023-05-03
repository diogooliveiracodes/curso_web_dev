<template>
  <div class="products">
    <h1>Produtos</h1>
    <ul>
      <li v-for="product in getProducts" :key="product.id">
        Qtd: {{product.quantidade}} | {{ product.nome }} | R${{ product.preco.toFixed(2) }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      store: useStore()
    }
  },
  computed: {
    ...mapGetters(["getProducts"]),
    ...mapActions(["fetchProducts"])
  },
  created() {
    this.store.dispatch('fetchProducts');
  }
});
</script>
