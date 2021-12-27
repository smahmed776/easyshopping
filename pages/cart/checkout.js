import Head from "next/head";
import { Fragment } from "react";
import CheckoutPage from "../../components/Cart/CheckoutPage";
import {useCart} from "../../components/custom hooks/cartHook"

export default function checkoutHandler(){
    const {cartItem} = useCart()
    return (
        <Fragment>
            <Head>
                <title>Checkout - easyShopping</title>
            </Head>
            <CheckoutPage cartItem={cartItem} />
        </Fragment>
    )
}