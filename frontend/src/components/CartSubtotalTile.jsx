// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CartSubtotalTile = () => {
    const getSubtotal = (list) => {
        let res = 0
        list.forEach( item => {
            res += Number(item.price * item.qty * (100 - item.discount) / 100)
        } )
        return res;
    }

    const cartList = useSelector((state)=>state.cart.value)

    useEffect(()=>{
    },[cartList])

    // useEffect(()=>{}, [state])

    return <div className='w-full p-4 bg-white text-black grid grid-flow-row grid-cols-2'>
        <div className='flex flex-col justify-center items-center'>
            <span className='text-green-500'>Your order qualifies for FREE shopping.</span>
            <span>Choose this option at checkout.</span>
        </div>
        <div className='flex flex-col gap-4 p-4 items-start border-l-2 border-gray-300'>
            <div>
                <span className="text-2xl font-bold">Cart subtotal:</span>
                <span className="pl-2 font-semibold text-lg">SAR {getSubtotal(cartList)}</span>
            </div>
            <button className="rounded-lg bg-yellow-500 font-semibold text-black p-2 px-8 text-center w-full md:w-fit">
                Proceed to Buy ({cartList.length} items)
            </button>
            <span>For the best experience sign in to your account</span>
        </div>
    </div>
}