import React from 'react'

export const ChildOne = ({fruits}) => {
  return (
    <div>
        <div>
            <h1>Fruits List</h1>
            { fruits.map((fruit)=> (
                <p>{fruit}</p>
            ))}
        </div>
    </div>
  )
}
