const productsActions = {
    fetchProducts(context: any) {
        fetch("http://localhost:3000/produtos")
            .then(response => response.json())
            .then(data => {
                context.commit("setProducts", data)
            })
    },
    // addProduto(context: any, payload: any) {
    //     fetch("http://localhost:3000/produtos", {
    //         method: "POST",
    //         body: JSON.stringify(payload)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             context.commit("addProduto", data)
    //         })
    // }
}

export default productsActions