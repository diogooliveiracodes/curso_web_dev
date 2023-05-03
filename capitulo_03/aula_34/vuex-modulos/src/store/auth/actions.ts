const authActions = {
    login(context: any, payload: any) {
        fetch("http://localhost:3000/login")
        .then((response) => response.json())
        .then((data) => {
            context.commit("setUser", data[0])
            context.commit("setIsAdmin", data[0].role)
            context.commit("setIsAuthenticated", true)
        })
    }
}

export default authActions