const counterActions = {
    incrementCounter(context: any) {
        context.commit('increment')
    },
    decrementCounter(context: any) {
        context.commit('decrement')
    }
}

export default counterActions