import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === 'GET_CHANNELS') {
        return {
            paket: [{
                id: 1,
                name: 'angular'
            }, {
                id: 2,
                name: 'laravel'
            }]
        }
    }
    return state
}

const initialState = {
    channels: []
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
