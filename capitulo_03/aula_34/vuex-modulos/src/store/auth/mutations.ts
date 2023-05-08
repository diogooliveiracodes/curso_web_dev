const authMutations = {
    setUser(state: any, user: any) {
        state.user = user
    },
    setIsAdmin(state: any, isAdmin: boolean) {
        state.isAdmin = isAdmin
    },
    setIsAuthenticated(state: any, isAuthenticated: boolean) {
        state.isAuthenticated = isAuthenticated
    }
}

export default authMutations