import counterGetters from './getters'
import counterMutation from './mutations'
import counterActions from './actions'

const counterModule = {
  state: {
    counter: 5
  },
  getters: counterGetters,
  mutations: counterMutation,
  actions: counterActions,
}

export default counterModule