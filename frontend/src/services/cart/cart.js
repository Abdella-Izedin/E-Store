import { createSlice } from "@reduxjs/toolkit";
import mouseImg from '../../assets/mouse.jpg'
import keyboardImg from '../../assets/keyboard.jpg'

const initialState = [
    {
        id: 1,
        src: mouseImg,
        title: 'Logitech G PRO X SUPERLIGHT Wireless Gaming Mouse - High Speed, Lightweight Gaming Mouse Compatible with PC and Mac (USB port) - Black',
        price: 469,
        currency: 'SAR',
        style: 'Mouse',
        'Pattern Name' : 'Generation 1',
        color: 'Black',
        qty: 1,
        instock: true,
        freedelivery: true,
        discount: 0,
    },
    {
        id: 2,
        src: keyboardImg,
        title: 'Redragon Wireless Mechanical Gaming Keyboard 60% Compact 70 Key Tenkeyless RGB Backlit Computer Keyboard with Red Switches for Windows PC GamersRedragon Wireless Mechanical Gaming Keyboard 60% Compact 70 Key Tenkeyless RGB Backlit Computer Keyboard with Red Switches for Windows PC Gamers',
        price: 299,
        currency: 'SAR',
        style: 'Keyboard',
        'Pattern Name' : 'Electronics',
        color: 'Black',
        qty: 1,
        instock: true,
        freedelivery: true,
        discount: 28,
    },
]

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {value:initialState},
    reducers:{
        addItem: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        deleteItem: (state, action) => {
            // console.log(action)
            state.value = [...state.value.filter( item => item.id != action.payload )]
            // console.log(state.value)
        },
        updateItem: (state, action) => {
            state.value = [...state.value.filter( item => item.id !== action.payload.id )]
            state.value = [...state.value, action.payload]
        }
    }
})

export const {addItem, deleteItem, updateItem} = cartSlice.actions
export default cartSlice.reducer