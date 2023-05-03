import AuthActions from "./actions"
import AuthGetters from "./getters"
import AuthMutations from "./mutations"

const AuthModule = {
    state : {},
    mutations: AuthMutations,
    actions: AuthActions,
    getters: AuthGetters
}

export default AuthModule
