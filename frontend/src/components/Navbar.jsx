// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/logo.png'
import { GrLocation } from "react-icons/gr";

export const Navbar = () => {
    
    return <nav className='fixed z-50 top-0 left-0 w-full'>
        <div
        style={{backgroundColor:'#131921'}}
         className={`flex flex-1 flex-row justify-between`}>
            <div className='flex items-center'>
                <a className='cursor-pointer'><div className='p-2 bg-white'>
                    <img src={logo} style={{ width: 'calc(100% + 0.5vw)'}}/>
                </div></a>
                <a className='cursor-pointer text-white'>
                <div className='p-2 flex no-wrap items-end'>
                    <GrLocation size={'calc(1rem + 0.5vw)'}/>
                    <div className='text-xs whitespace-nowrap ml-1'>
                        <span>Delivering to Riyadh</span><br/>
                        <span className='font-bold'>Update Location</span>
                    </div>
                </div>
                </a>
            </div>
            <div className='flex w-full'>
                <div>Search box</div>
            </div>
            <div className='flex'>
                <div>Language</div>
                
                <div>Profile</div>
                
                <div>Orders</div>
                
                <div>Cart</div>
            </div>
        </div>
        <div></div>
    </nav>
}

export default Navbar 