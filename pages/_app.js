import "../styles/globals.css";
import "../styles/header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/Layout";
import { CartItemProvider } from "../components/contexts/CartItemContext";
import { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";

export default function MyApp(props) {
  const { Component, pageProps } = props;

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
