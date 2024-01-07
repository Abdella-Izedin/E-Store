// eslint-disable-next-line no-unused-vars
import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../services/cart/cart";
// import { useDispatch } from "react-redux";
// import { deleteItem } from "../services/cart/cart";

// eslint-disable-next-line react/prop-types
export const ShoppingCartItem = ({props, deleteCartItem, handleQuantityChange}) => {
    
    // const dispatch = useDispatch()

    // const [state, setState] = useState({
    //     props: props
    // })

    useEffect(() => {}, [props])

    return (
        <div className='w-full flex py-4 flex-1 gap-4 flex-row border-b-2 border-gray-300'>
            <div className="w-[20%] flex flex-col justify-center items-center">
                <img src={props.src} className="w-full"/>
            </div>
            <div className='w-full flex flex-col gap-1'>
                <span className="text-2xl font-medium">{props.title}</span>
                <span className={`text-md ${props.instock ? 'text-green-500' : 'text-red-600' }`}>{props.instock ? 'In Stock' : 'Out of Stock'}</span>
                {props.freedelivery && <span>Eligible for FREE delivery</span>}
                <div><span className='text-md font-semibold'>Style: </span><span>{props.style}</span></div>
                <div><span className="text-md font-semibold">Pattern Name:</span>{props['Pattern Name']}<span></span></div>
                <div><span className='text-md font-semibold'>Color: </span><span>{props.color}</span></div>

                <div className='flex flex-row items-center justify-start gap-2'>
                    <span className='cursor-pointer bg-gray-400 text-black flex rounded-md shadow-md outline-1 outline-black hover:bg-gray-300 hover:shadow-lg py-1 px-4'>
                        Qty: <input className='bg-transparent pl-2 w-fit' type='number' min={0} max={10} value={props.qty} onChange={(e)=>{handleQuantityChange(props.id, e.target.value || 0)}} placeholder={props.qty}/>
                    </span>
                    <span className="px-4 border-l-2 border-gray-300"><a className="text-cyan-500" onClick={() => {deleteCartItem(props.id)}}>Delete</a></span>
                    <span className="px-4 border-l-2 border-gray-300"><a className="text-cyan-500" >Save for later</a></span>
                    <span className="px-4 border-l-2 border-gray-300"><a className="text-cyan-500" >Share</a></span>
                </div>
            </div>
            <div className="p-4 w-[20%] flex flex-col items-end justify-start">
                {props.discount !== 0 && <div className='flex flex-row gap-1'>
                        <div className="p-1 bg-pink-800 text-white text-md font-semibold">{props.discount}% off</div>
                        <span className="text-pink-800 p-1 font-semibold text-md">Deal</span>
                    </div>}
                    <div className='flex flex-row gap-1'>
                        <span className='font-bold text-xl'>{props.currency}</span>
                        <span className='font-bold text-xl'>{Number(props.price * props.qty * (100 - props.discount) / 100)}</span>
                        
                    </div>
                    <span className="text-sm">{props.discount !== 0 ? 'List price = ' : ''}{props.discount !== 0 ? Number(props.price * props.qty) : ''}</span>
            </div>
        </div>
        )
}

export default ShoppingCartItem