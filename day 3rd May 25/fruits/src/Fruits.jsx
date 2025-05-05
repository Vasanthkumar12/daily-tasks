import React from 'react'
import { useState } from 'react'
import { ChildOne } from './ChildOne'
import { ChildTwo } from './ChildTwo'

export const Fruits = () => {
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange'])
    return (
    <div>
        <ChildOne fruits={fruits} />
        <ChildTwo fruits={fruits} setFruits={setFruits} />
    </div>
  )
}
