import { createStore } from 'vuex'

export default createStore({
  state: {
    listaDeTarefas: [
      { id: 1, nome: "Fazer Para Casa", data: '2023/04/23', check: true },
      { id: 2, nome: "Revisar Aula", data: '2023/04/23', check: false }

    ]
  },
  getters: {
  },
  mutations: {
    addTarefa(state, payload) {
      state.listaDeTarefas.push(payload)
    },
    removeTarefa(state, payload){
      state.listaDeTarefas= state.listaDeTarefas.filter((item) => item.id !== payload)
    }
  },
  actions: { 
    removeTarefa ({commit}, payload) {
      commit('removeTarefa', payload)
      alert('Tarefa Removida!!!')
    }
  },
  modules: {
  }
})
