import { INCREMENT, DECREMENT, RESET } from "./actionTypes"

export const incrementCounter = (data) => {
    console.log("increment")
    return { 
        type: INCREMENT, 
        payload: data 
    }
}
export const decrementCounter = (data) => {
    return { 
        type: DECREMENT, 
        payload: data 
    }
}
export const resetCounter = () => {
    return { 
        type: RESET
    }
}