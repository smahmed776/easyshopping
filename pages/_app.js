import "../styles/globals.css";
import "../styles/header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/Layout";
import { CartItemProvider } from "../components/contexts/CartItemContext";
import { Fragment, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import {useRouter} from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";


export default function MyApp(props) {
  const { Component, pageProps } = props;

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])



  return (
    <Fragment>
      <Head>
        <title>EasyShopping - shopping got easy!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CartItemProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartItemProvider>
      </ThemeProvider>
    </Fragment>
  );
}
