import authActions from "./actions"
import authGetters from "./getters"
import authMutations from "./mutations"

const authModule = {
    state: {
        user: {},
        isAdmin: false,
        isAuthenticated: false,
        username: '',
        password: ''
    },
    mutations: authMutations,
    actions: authActions,
    getters: authGetters,
}

export default authModule