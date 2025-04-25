import React, { useState } from 'react'

export const AddExpense = () => {
    const [expense, setExpense] = useState({ description: '', amount: 0, other: 'other' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setExpense({ ...expense, [name]: value })
    }

    const addExpense = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={addExpense}>
            <input type="text" name='description' onChange={handleChange} placeholder='Enter description' />
            <input type="number" name='amount' onChange={handleChange} placeholder='Enter amount' />
            <select name="other">
                <option value="Other">Other</option>
            </select>
            <input type="submit" value='Add Expense' />
        </form>
    </div>
  )
}
