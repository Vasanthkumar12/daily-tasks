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
    <div className='shadow-md p-4 m-4 mt-10'>
        <form onSubmit={addExpense} className='grid grid-cols-4'>
            <input type="text" name='description' onChange={handleChange} placeholder='Enter description' 
                className='border p-1 pl-2 text-[18px] mr-2 rounded-sm'
            />
            <input type="number" name='amount' onChange={handleChange} placeholder='Enter amount' 
                className='border p-1 pl-2 text-[18px] mr-2 rounded-sm'
            />
            <select name="other" className='border p-1 pl-2 text-[18px] mr-2 rounded-sm'>
                <option value="Other" className='font-bold' >Other</option>
            </select>
            <input type="submit" value='Add Expense' className='border p-2 pl-5 pr-5 text-white bg-green-600 font-bold rounded-sm' />
        </form>
    </div>
  )
}
