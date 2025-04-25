import React from 'react'
import { CiHome } from "react-icons/ci";
import { GrAnalytics } from "react-icons/gr";
import { MdHistory } from "react-icons/md";

export const Navbar = () => {
    return (
        <div>
            <CiHome />
            <span>Dashboard</span>
            <GrAnalytics />
            <span>Analytics</span>
            <MdHistory />
            <span>History</span>
        </div>
    )
}