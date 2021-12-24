import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import SingleItem from "./SingleItem";
import AddressCol from "./AddressCol";
import {useCart} from "../custom hooks/cartHook"

const CartPage = () => {
  const {cartItem} = useCart()
  return (
    <Box sx={{ padding: { xs: 1, md: 3 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} sx={{ px: 1 }}>
          <Container
            sx={{
              border: 1,
              borderColor: "primary.light",
              p: 1,
              backgroundColor: "rgba(248,249,250)",
            }}
          >
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Typography variant="body2">Item</Typography>
              <Typography variant="body2">Qty</Typography>
              <Typography variant="body2">Price</Typography>
            </Grid>
          </Container>
          {cartItem?.length > 0 && cartItem.map((item, index)=> (

          <SingleItem index={index} key={index} item={item} cartItem={cartItem} />
          ))

          }
        </Grid>

        <Grid item xs={12} md={5}>
          <AddressCol />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
