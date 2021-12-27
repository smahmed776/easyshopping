import { Fragment } from "react";
import Head from "next/head";
import CartPage from "../../components/Cart/CartPage"

export default function cartHandler (){
    return (
        <Fragment>
            <Head>
                <title> Cart - EasyShopping </title>
            </Head>
            <div>
                <CartPage />
            </div>
        </Fragment>
    )
}