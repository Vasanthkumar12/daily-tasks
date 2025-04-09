// import React, { useReducer } from 'react'
import { decrementCounter, incrementCounter, resetCounter } from './redux/actions'
import { useDispatch } from 'react-redux'

export const Counter = () => {
    // const [counter, dispatch] = useReducer(counterReducer, initialState)
    const dispatch = useDispatch()

    // console.log(counter)
    return (
      <>
        <div>
          {/* <h1>Count = {counter.count}</h1> */}
          <button onClick={() => dispatch(incrementCounter(1))}>Increment</button>
          <button onClick={() => dispatch(decrementCounter(1))}>Decrement</button>
          <button onClick={() => dispatch(resetCounter())}>Reset</button>
        </div>
      </>
  )
}
