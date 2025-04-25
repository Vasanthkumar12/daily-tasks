import React from 'react'
import { FiHome } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";
import { MdHistory } from "react-icons/md";

export const Navbar = () => {
    return (
        <div className='flex justify-start items-center pl-10 pt-3 pb-3 shadow-md'>
            <div className='flex justify-start items-center pl-20'>
                <FiHome className='h-10 w-7' />
                <span className='pl-2 text-[18px]'>Dashboard</span>
            </div>
            <div className='flex justify-start items-center pl-20'>
                <GrAnalytics className='h-10 w-7' />
                <span className='pl-2 text-[18px]'>Analytics</span>
            </div>
            <div className='flex justify-start items-center pl-20'>
                <MdHistory className='h-10 w-7' />
                <span className='pl-2 text-[18px]'>History</span>
            </div>
        </div>
    )
}