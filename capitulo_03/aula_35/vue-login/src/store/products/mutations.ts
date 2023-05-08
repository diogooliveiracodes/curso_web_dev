const productsMutations = {
    setProducts(state: any, payload: any) {
        state.products = payload
    },
    addProduto(state: any, payload: any) {
        state.products.push(payload)
    }
}

export default productsMutations