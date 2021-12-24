import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import {useCart} from "../custom hooks/cartHook"

const SingleItem = ({item, index, cartItem }) => {
  const {removeItem } = useCart()
  const [mounted, setMounted] = useState(false);
  console.log(item)
  const CustomContainer = styled(Container)(({ theme }) => ({
    "&.MuiContainer-root": {
      padding: theme.spacing(0, 0),
      margin: theme.spacing(1, 0),
    },
  }));
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <CustomContainer
        sx={{
          border: 1,
          borderColor: "#dee2e6",
        }}
        key={index}
      >
        <Box
          sx={{
            backgroundColor: "rgba(248,249,250)",
            p: 1,
            borderBottom: "1px solid #dee2e6",

            maxWidth: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography align="left" variant="body2">
           {` Package ${index + 1} of ${cartItem.length}`}
          </Typography>
          <Button align="left" variant="text" onClick={()=> removeItem(item)}>
            Remove
          </Button>
        </Box>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Grid item xs={8} sx={{pr:2}}>
            <Grid container spacing={1}>
              <Grid item>
                <img src={item.image} style={{ height: "45px", width: "45px" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{width: "100%", overflow: "hidden", textOverflow: "ellipsis"}}>{item.name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.quantity}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.price}</Typography>
          </Grid>
        </Grid>
      </CustomContainer>
    )
  );
};

export default SingleItem;
