import { createStore } from 'vuex'

export default createStore({
  state: {
    listaAlunos: [
      { id: 1, nome: 'João', nota: 7.5 },
      { id: 2, nome: 'Maria', nota: 8.5 },
      { id: 3, nome: 'José', nota: 9.5 },
      { id: 4, nome: 'Ana', nota: 10 },
      { id: 5, nome: 'Marcos', nota: 5.5 },
    ],
    contador: 0,
    logradouro: String
  },
  getters: {
    alunosAprovados(state) {
      return state.listaAlunos.filter(aluno => aluno.nota >= 7)
    },
    alunosReprovados(state) {
      return state.listaAlunos.filter(aluno => aluno.nota < 7)
    }
  },
  // Mutations são responsáveis por alterar o estado da aplicação(state)
  mutations: {
    incrementarContador(state, payload) {
      state.contador += payload
    },
    setCep(state, payload) {
      state.logradouro = payload
    }
  },
  actions: {
    buscaCep({ commit }, payload) {
      //faz a requisição para a API do correios
      // commit('setCep', response.data.logradouro)
    }
  },
  modules: {
  }
})
