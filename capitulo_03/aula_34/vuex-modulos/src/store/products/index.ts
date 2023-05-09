import productsActions from "./actions"
import productsGetters from "./getters"
import productsMutations from "./mutations"

const productsModule = {
    state: {
        products: []
    },
    getters: productsGetters,
    mutations: productsMutations,
    actions: productsActions 
}

export default productsModule