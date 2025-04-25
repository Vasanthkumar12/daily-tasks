import React, { useState } from 'react'

export const SetBudget = () => {
    const [budget, setBudget] = useState(0)

    const handleSetBudget = (e) => {
        e.preventDefault();

    }
  return (
    <div>
        <h1 className='text-[32px] font-bold pl-5 pt-5'>Expense Tracker</h1>
        <div className='shadow-md m-5 p-4'>
            <form onSubmit={setBudget} className='flex justify-between'>
                <input type="number" name='budget' onChange={() => setBudget(e.target.value)} placeholder='Enter budget amount' 
                    className='border p-1 pl-2 text-[18px] flex-1 mr-2 rounded-sm'
                />
                <input type="submit" className='border p-2 pl-5 pr-5 text-white bg-blue-600 font-bold rounded-sm' value='Set Budget' />
            </form>
            <div className='mt-5 flex justify-between'>
                <div className='bg-blue-100 p-5 pr-45'>
                    <h2 className='text-[16px]'>Total Budget</h2>
                    <h1 className='text-[24px] font-bold'>$0</h1>
                </div>
                <div className='bg-green-100 p-5 pr-45'>
                    <h2 className='text-[16px]'>Total Expense</h2>
                    <h1 className='text-[24px] font-bold'>$0</h1>
                </div>
                <div className='bg-yellow-100 p-5 pr-45'>
                    <h2 className='text-[16px]'>Remaining</h2>
                    <h1 className='text-[24px] font-bold'>$0</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
