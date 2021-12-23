import { useContext } from 'react'
import { CartItemContext } from '../contexts/CartItemContext'


export const useCart = () => {
    const ctx = useContext(CartItemContext)
    // console.log(ctx);
    // console.log('Problem occured');
    return {
        ...ctx
    }
}

