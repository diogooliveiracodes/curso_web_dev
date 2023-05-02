import axios from 'axios'

const productsActions = {
    fetchProducts(context: any) {
        fetch("http://localhost:3000/produtos")
            .then(response => response.json())
            .then(data => {
                context.commit("setProducts", data)
            })
    },
    //npm install axios
    addProduto(context: any, payload: any) {
        axios.post('http://localhost:3000/produtos', {
            "nome": payload.nome,
            "preco": payload.preco,
            "descricao": payload.descricao,
            "quantidade": payload.quantidade
          })
          .then(function (response:any ) {
            context.commit('addProduto', response.data)
          })
          .catch(function (error:any) {
            console.log(error);
          });
          
    }
}

export default productsActions