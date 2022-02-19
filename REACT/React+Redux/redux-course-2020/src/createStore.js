export function createStore(rootReducer,initialState) {
    let state = rootReducer(initialState,{type:'INIT'})
    const subscribers = []

    return {
        dispatch(action) {
            // action === {type:'INCREMENT}
            state = rootReducer(state, action)
            subscribers.forEach(sub=>sub())
        },
        subscribe(callBack) {
            subscribers.push(callBack)
        },
        getState() {
            return state
        }
    }
}