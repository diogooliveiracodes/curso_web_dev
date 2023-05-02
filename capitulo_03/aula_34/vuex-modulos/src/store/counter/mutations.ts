const counterMutation = {
    increment(state: any) {
        state.counter++
    },
    decrement(state: any) {
        state.counter--
    }
}

export default counterMutation