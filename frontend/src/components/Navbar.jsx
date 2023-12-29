// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/logo.png'
import { GrLocation } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    
    return <nav className='fixed z-50 top-0 left-0 w-full'>
        <div
        style={{backgroundColor:'#131921'}}
         className={`flex flex-1 flex-row justify-between`}>
            <div className='flex items-center'>
                <Link to='/' className='cursor-pointer h-full bg-white flex items-center'>
                    <div className='p-2 bg-white'>
                        <img src={logo} style={{ width: 'calc(100% + 0.5vw)'}}/>
                    </div>
                </Link>
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
            <div className='flex w-full p-2'>
                <div className='w-full flex flex-row flex-1 justify-between items-center bg-white rounded-md text-black'>
                    <div className='bg-slate-300 cursor-pointer rounded-l-md h-full flex items-center p-1 px-2'>
                        <span className='text-sm'>All</span>
                    </div>
                    <div className='w-full h-full'><input type='text' placeholder='Search item...' className='w-full h-full bg-transparent focus:outline-0 px-2'/></div>
                    <div className='p-2 bg-yellow-500 cursor-pointer rounded-r-md h-full flex justify-center items-center'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='p-2 cursor-pointer hover:outline hover:outline-1 flex justify-center items-center'><span className='text-lg'>EN</span></div>
                
                <div className='text-xs p-2 cursor-pointer hover:outline hover:outline-1 whitespace-nowrap flex flex-col justify-center items-center'>
                    <span>Hello, sign in</span>
                    <span className='font-semibold'>Account & Lists</span>
                </div>
                
                <Link to={'/order'} className='p-2 hover:outline cursor-pointer hover:outline-1 hover:text-white text-white flex items-center font-semibold ' >Orders</Link>
                
                <Link to='/cart' className='hover:outline hover:outline-1 cursor-pointer flex justify-center items-center p-2'>
                    <CiShoppingCart className='text-white text-2xl' />
                    <span className=' absolute top-[40%] text-yellow-500 text-sm' style={{transform: 'translateY(-100%)'}}>0</span>
                </Link>
            </div>
        </div>
        <div></div>
    </nav>
}

export default Navbar 