const initialState = {
    counter :2,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state,counter:state.counter+1}  
        case "DECREMENT":
            return {...state,counter:state.counter-1}  
        case "ADD5":
            return {...state,counter:state.counter+action.value}  
        case "SUB5":
            return {...state,counter:state.counter-action.value}  
        case "STORE":
            return {...state,results: [...state.results, state.counter]} 
        case "DELETE":
            console.log('dlet')
            console.log({...state,results: state.results.filter( result => result !== action.va)} )
            return {...state,results: state.results.filter(result => result != action.va)} 
        default:
            console.log("her")
            break;
    }
    return state
}

export default reducer;