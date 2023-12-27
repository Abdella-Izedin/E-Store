// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/logo.png'
import { GrLocation } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci"

export const Navbar = () => {
    
    return <nav className='fixed z-50 top-0 left-0 w-full'>
        <div
        style={{backgroundColor:'#131921'}}
         className={`flex flex-1 flex-row justify-between`}>
            <div className='flex items-center'>
                <a className='cursor-pointer h-full bg-white flex items-center'><div className='p-2 bg-white'>
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
                <div className='p-2 cursor-pointer hover:outline hover:outline-1 flex justify-center items-center'><span className='text-lg'>EN</span></div>
                
                <div className='text-xs p-2 cursor-pointer hover:outline hover:outline-1 whitespace-nowrap flex flex-col justify-center items-center'>
                    <span>Hello, sign in</span>
                    <span className='font-semibold'>Account & Lists</span>
                </div>
                
                <div className='p-2 hover:outline cursor-pointer hover:outline-1 flex items-center font-semibold ' >Orders</div>
                
                <div className='hover:outline hover:outline-1 cursor-pointer flex justify-center items-center p-2'>
                    <CiShoppingCart className='text-white text-2xl' />
                    <span className=' absolute top-[40%] text-yellow-500 text-sm' style={{transform: 'translateY(-100%)'}}>0</span>
                </div>
            </div>
        </div>
        <div></div>
    </nav>
}

export default Navbar 