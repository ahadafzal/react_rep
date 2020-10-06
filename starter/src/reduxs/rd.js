const redux = require('redux');

console.log('redux');

const createStore = redux.createStore;

const initialState = { counter : 0}

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case "INC_COUNTER":
            return {...state, counter : state.counter+1 }            
            break;
        case "ADD_COUNTER":
            return {...state, counter: state.counter+action.value}
        case "RES_COUNTER":
            return {...state, counter: 0}   
        default:
            console.log('default')
            break;
    }
    return state
};

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('[Subscription]',store.getState());
})

store.dispatch({type : "INC_COUNTER"})
store.dispatch({type : "ADD_COUNTER", value: 10})
store.dispatch({type : "RES_COUNTER"})

store.dispatch({type : "OTH_COUNTER"})