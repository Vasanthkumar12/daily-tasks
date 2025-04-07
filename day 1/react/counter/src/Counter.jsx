import React, { useReducer } from 'react'
import { counterReducer } from './redux/counterReducer'
import { decrementCounter, incrementCounter, resetCounter } from './redux/actions'

const initialState = {
  count: 0
}

export const Counter = () => {
    const [counter, dispatch] = useReducer(counterReducer, initialState)
    console.log(counter)
    return (
      <>
        <div>
          <h1>Count = {counter.count}</h1>
          <button onClick={() => dispatch(incrementCounter(1))}>Increment</button>
          <button onClick={() => dispatch(decrementCounter(1))}>Decrement</button>
          <button onClick={() => dispatch(resetCounter())}>Reset</button>
        </div>
      </>
  )
}
