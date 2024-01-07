import React, { useState, useEffect, useDebugValue } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import {useDispatch, useSelector} from 'react-redux'
import { deleteItem, updateItem } from "../services/cart/cart";

export const ShoppingCart = () => {

    const cartList = useSelector((state)=>state.cart.value)
    const dispatch = useDispatch()
    const getSubtotal = (list) => {
        let res = 0
        list.forEach( item => {
            res += Number(item.price * item.qty * (100 - item.discount) / 100)
        } )
        return res;
    }

    const [state, setState] = useState({
        cartList: cartList,
        total: getSubtotal(cartList)
    })

    const deleteCartItem = (id) => {
        dispatch(deleteItem(id))
        let newlist = [...state.cartList.filter( it => it.id !== id )]
        setState({
            ...state,
            total: getSubtotal(newlist),
            cartList: newlist
        })
    }

    const handleQuantityChange = (id, newQty) => {
        let item = state.cartList.find( e => e.id === id)
        item = {...item, qty: newQty}
        let list = [...state.cartList.filter(e=>e.id !== item.id)]
        list = [...list, item]
        // console.log(item)
        dispatch(updateItem(item))
        setState({...state, cartList: list, total: getSubtotal(list)})
    }

    useEffect(()=>{}, [state, cartList])

    return <div className='flex flex-col bg-white text-black p-4'>
        <div className="border-b-2 border-gray-300 flex justify-between pb-2">
            <span className="text-2xl font-semibold">Shopping Cart</span>
            <span>Price</span>
        </div>
        <div className="flex flex-col gap-2">
            {
                state.cartList.map( (item, id) => <ShoppingCartItem key={id} props={item} deleteCartItem={deleteCartItem} handleQuantityChange={handleQuantityChange}/> )
            }
            
        </div>
        <div className="pt-2 flex justify-end gap-2 items-center">
            <span className="text-xl font-semibold">Subtotal ({state.cartList.length} items): </span>
            <span className="text-lg">SAR {state.total}</span>
        </div>
    </div>
}