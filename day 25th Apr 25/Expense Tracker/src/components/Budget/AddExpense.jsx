import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpenseToStore } from '../../redux/actions'
import { MdOutlineDelete } from "react-icons/md"

export const AddExpense = () => {
    const [expense, setExpense] = useState({ description: '', amount: '', category: '' })
    const expenses = useSelector((expenseStore) => expenseStore.expenses)

    const handleChange = (e) => {
        const { name, value } = e.target
        setExpense({ ...expense, [name]: value })
    }

    const dispatch = useDispatch()

    const addExpense = (e) => {
        e.preventDefault()
        dispatch(addExpenseToStore(expense))
        setExpense({ description: '', amount: '', category: '' })
    }

    const categories = ["Mutton", "Chicken", "Fruits", "Vegetables", "Seafood",
        "Dairy Products", "Bakery Items", "Beverages", "Snacks", "Grains & Pulses",
        "Spices & Condiments", "Personal Care", "Household Supplies", "Frozen Foods",
        "Pet Supplies", "other"
    ]
      
  return (
    <>
        <div className='shadow-md p-4 m-4 mt-10'>
            <form onSubmit={addExpense} className='grid grid-cols-4'>
                <input type="text" name='description' value={ expense.description } onChange={handleChange} placeholder='Enter description' 
                    className='border p-1 pl-2 text-[18px] mr-2 rounded-sm'
                />
                <input type="number" name='amount' value={ expense.amount } onChange={handleChange} placeholder='Enter amount' 
                    className='border p-1 pl-2 text-[18px] mr-2 rounded-sm'
                />
                <select name="category" value={expense.category} onChange={handleChange} className='border p-1 pl-2 text-[18px] mr-2 rounded-sm'>
                    <option value="" className='font-bold'>Category</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
                <input type="submit" value='Add Expense' className='border p-2 pl-5 pr-5 text-white bg-green-600 font-bold rounded-sm cursor-pointer' />
            </form>
        </div>

        <div className='m-4 shadow-md p-4 mt-10'>
            <table className='border w-full'>
                <thead>
                  <tr>
                    <th className='border p-2'>DESCRIPTION</th>
                    <th className='border p-2'>CATEGORY</th>
                    <th className='border p-2'>AMOUNT</th>
                    <th className='border p-2'>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  { expenses && expenses.map((exp, index) => (
                    <tr key={index}>
                      <td className='border p-2 text-center'>{exp.description}</td>
                      <td className='border p-2 text-center'>{exp.category}</td>
                      <td className='border p-2 text-center'>{exp.amount}</td>
                      <td className='border'>
                        <div className='flex justify-center'>
                            <MdOutlineDelete className='h-7 w-6'/>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    </>
  )
}
