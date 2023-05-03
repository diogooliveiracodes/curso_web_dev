import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [
      { id: 1, nome: "Estudar HTML", data: '2023/04/23', check: true },
      { id: 2, nome: "Estudar CSS", data: '2023/04/23', check: false },
      { id: 3, nome: "Estudar JavaScript", data: '2023/04/23', check: false },
      { id: 4, nome: "Estudar Vue", data: '2023/04/23', check: false },
      { id: 5, nome: "Estudar Vuex", data: '2023/04/23', check: false },
      { id: 6, nome: "Estudar Vue Router", data: '2023/04/23', check: false },
      { id: 7, nome: "Estudar TypeScript", data: '2023/04/23', check: false },
    ]
  },
  getters: {
  },
  mutations: {
    addItemMutation(state, payload) {
      state.todoList.push(payload)
    },
    removeItemById(state, payload) {
      state.todoList = state.todoList.filter((item) => item.id !== payload)
    }
  },
  actions: {
    removeItemById({ commit }, payload) {
      commit('removeItemById', payload)
      alert('Item removido com sucesso!')
    }
  },
  modules: {
  }
})
