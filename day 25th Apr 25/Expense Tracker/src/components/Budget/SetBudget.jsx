import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalBudget } from '../../redux/actions'

export const SetBudget = () => {
    const dispatch = useDispatch()
    const [budget, setBudget] = useState(0)
    const total_amount = useSelector((expensesStore) => expensesStore.total_budget)
    const remaining_amount = useSelector((expensesStore) => expensesStore.remaining)

    const handleSetBudget = (e) => {
        e.preventDefault();
        dispatch(setTotalBudget(budget))
    }
  return (
    <div>
        <h1 className='text-[32px] font-bold pl-5 pt-5'>Expense Tracker</h1>
        <div className='shadow-md m-5 p-4'>
            <form onSubmit={handleSetBudget} className='flex justify-between'>
                <input type="number" name='budget' onChange={(e) => setBudget(e.target.value)} placeholder='Enter budget amount' 
                    className='border p-1 pl-2 text-[18px] flex-1 mr-2 rounded-sm'
                />
                <input type="submit" className='border p-2 pl-5 pr-5 text-white bg-blue-600 font-bold rounded-sm' value='Set Budget' />
            </form>
            <div className='mt-5 grid grid-cols-3 gap-4'>
                <div className='bg-blue-100 p-5 pr-5'>
                    <h2 className='text-[16px] text-blue-600'>Total Budget</h2>
                    <h1 className='text-[24px] font-bold'>${total_amount}</h1>
                </div>
                <div className='bg-green-100 p-5 pr-5'>
                    <h2 className='text-[16px] text-green-600'>Total Expense</h2>
                    <h1 className='text-[24px] font-bold'>$0</h1>
                </div>
                <div className='bg-yellow-100 p-5 pr-5'>
                    <h2 className='text-[16px] text-yellow-500'>Remaining</h2>
                    <h1 className='text-[24px] font-bold'>${remaining_amount}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
