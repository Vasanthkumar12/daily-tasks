import React from 'react'

// Part 1: Props in Action

export const Greeting = ({name, timeOfDay, showGreet}) => {
    let message = ''

    if (timeOfDay < 12) {
        message = 'Morning'
    }
    else if (timeOfDay >= 12 && timeOfDay < 16) {
        message = 'Afternoon'
    }
    else {
        message = "Evening"
    }
  return (
    <div>
        <h1>Good {message}, {name}!</h1>
    </div>
  )
}
