import { INCREMENT, DECREMENT, RESET } from "./actionTypes"

export const incrementCounter = (data) => {
    console.log("increment")
    return (dispatch) => { 
        dispatch({ 
            type: INCREMENT, 
            payload: data 
        })
    }
}
export const decrementCounter = (data) => {
    return (dispatch) => { 
        dispatch({
            type: DECREMENT, 
            payload: data 
        })
    }
}
export const resetCounter = () => {
    return (dispatch) => { 
        dispatch({
            type: RESET
        })
    }
}