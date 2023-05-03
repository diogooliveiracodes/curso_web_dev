import { createStore } from 'vuex'

export default createStore({
  state: {
    listaAlunos: [
      { nome: 'João', nota: 7.5, endereco:{logradouro: '', cidade: ''}},
      { nome: 'Maria', nota: 8.5, endereco:{logradouro: '', cidade: ''} },
      { nome: 'José', nota: 4, endereco:{logradouro: '', cidade: ''} },
      { nome: 'Ana', nota: 10, endereco:{logradouro: '', cidade: ''} },
      { nome: 'Marcos', nota: 5.5, endereco:{logradouro: '', cidade: ''} },
    ],
    // contador: 0,
    // logradouro: String
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
    alterarNota(state, payload) {
      state.listaAlunos[payload.index].nota = payload.nota
    },
    adicionaEndereco(state, payload) {
      state.listaAlunos[payload.index].endereco = payload.endereco
    }
    // incrementarContador(state, payload) {
    //   state.contador += payload
    // },
    // setCep(state, payload) {
    //   state.logradouro = payload
    // }
  },
  actions: {
    buscaCep({ commit }, payload) {
      fetch(`https://viacep.com.br/ws/${payload.cep}/json/`)
        .then(response => response.json())
        .then(data => {
          const dadosAluno = {
            index: payload.index, 
            endereco: {logradouro: data.logradouro, cidade: data.localidade}
          }
          commit('adicionaEndereco', dadosAluno)
        })
    }
  },
  modules: {
  }
})
