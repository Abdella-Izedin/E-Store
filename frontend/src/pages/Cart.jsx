// import React from "react";

import { CartSubtotalTile } from "../components/CartSubtotalTile";
import { ShoppingCart } from "../components/ShoppingCart";

export const Cart = () => {
    return <div className='bg-gray-400 p-4 flex flex-col w-full justify-center gap-4'>
        <CartSubtotalTile />
        <ShoppingCart />
    </div>
}

export default Cart;