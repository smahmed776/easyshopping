import React, { createContext, useReducer, useState, useEffect} from 'react'
import { CartReducer, sumItems} from "../reducers/CartReducer";




export const CartItemContext = createContext();

export const ACTIONS = {
    INCREASE: 'increase',
    DECREASE: 'decrease',
    ADD_ITEM: 'add_item',
    REMOVE_ITEM: 'remove_item'
}


export const CartItemProvider = props => {

    const arr = typeof window !== "undefined" ? localStorage?.getItem('cart') && JSON.parse(localStorage.getItem('cart')): []
   
    const initialState = {cartItem: arr, ...sumItems(arr)}

    const [state, dispatch] = useReducer(CartReducer, initialState)
    const addItem = payload => {
        dispatch({type: ACTIONS.ADD_ITEM, payload})
    }
    const removeItem = payload => {
        dispatch({type: ACTIONS.REMOVE_ITEM, payload})
    }
    const increase = payload => {
        dispatch({type: ACTIONS.INCREASE, payload})
    }
    const decrease = payload => {
        dispatch({type: ACTIONS.DECREASE, payload})
    }
    const CartContextValue = {
        removeItem, 
        increase,
        decrease, 
        addItem,
        ...state
    }
    // useEffect(()=>{
    //     if(typeof window !== "undefined"){
    //         setArr(localStorage?.getItem('cart')? JSON.parse(localStorage.getItem('cart')): [])
    //     }
    // }, [])
    return (
        <CartItemContext.Provider value={CartContextValue}>
            {props.children}
        </CartItemContext.Provider>
    )
};