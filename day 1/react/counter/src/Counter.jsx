import React, { useReducer } from 'react'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialState = {
  count: 0
}

const counterReducer = (state, action) => {
  switch(action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload }

    case DECREMENT:
      return { ...state, count: state.count - action.payload }

    case RESET:
      return { ...state, count: 0 }

    default: 
      return state

  }
}

export const Counter = () => {
    const [counter, dispatch] = useReducer(counterReducer, initialState)
    console.log(counter)
    return (
      <>
        <div>
          <h1>Count = {counter.count}</h1>
          <button onClick={() => dispatch({ type: INCREMENT, payload: 1 })}>Increment</button>
          <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })}>Decrement</button>
          <button onClick={() => dispatch({ type: RESET, payload: 1 })}>Reset</button>
        </div>
      </>
  )
}
