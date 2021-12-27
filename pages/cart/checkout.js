import Head from "next/head";
import { Fragment } from "react";
import CheckoutPage from "../../components/Cart/CheckoutPage";

export default function checkoutHandler(){
  
    return (
        <Fragment>
            <Head>
                <title>Checkout - easyShopping</title>
            </Head>
            <CheckoutPage  />
        </Fragment>
    )
}