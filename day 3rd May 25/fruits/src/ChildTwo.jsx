import React from 'react'
import { useState } from 'react'

export const ChildTwo = ({fruits, setFruits}) => {
    const [newFruit, setNewFruit] = useState('')

    const addFruit = () => {
        console.log(newFruit)
        // fruits.push(newFruit)
        setFruits([...fruits, newFruit])
        setNewFruit('')
    }
  return (
    <div>
        <input onChange={(e) => setNewFruit(e.target.value)} value={newFruit} type="text" placeholder='Add fruit to list' />
        <button onClick={addFruit}>Add Fruit</button>
    </div>
  )
}
