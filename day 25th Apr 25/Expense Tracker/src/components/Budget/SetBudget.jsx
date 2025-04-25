import React, { useState } from 'react'

export const SetBudget = () => {
    const [budget, setBudget] = useState(0)

    const handleSetBudget = (e) => {
        e.preventDefault();

    }
  return (
    <div>
        <h1>Expense Tracker</h1>
        <form onSubmit={setBudget}>
            <input type="number" name='budget' onChange={() => setBudget(e.target.value)} placeholder='Enter budget amount' />
            <input type="submit" value='Set Budget' />
        </form>
        <div>
            <h2>Total Budget</h2>
            <h1>$0</h1>
        </div>
        <div>
            <h2>Total Expense</h2>
            <h1>$0</h1>
        </div>
        <div>
            <h2>Remaining</h2>
            <h1>$0</h1>
        </div>
    </div>
  )
}
