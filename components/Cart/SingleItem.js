import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Typography, Grid, Button, InputBase, IconButton, Input, Tooltip } from "@mui/material";
import {useCart} from "../custom hooks/cartHook"
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';

const SingleItem = ({item, index, cartItem }) => {
  const {removeItem, increase, decrease  } = useCart();
  
  const [mounted, setMounted] = useState(false);
  const CustomContainer = styled(Container)(({ theme }) => ({
    "&.MuiContainer-root": {
      padding: theme.spacing(0, 0),
      margin: theme.spacing(1, 0),
    },
  }));
  const IncreaQuantity = styled("div")(({theme})=> ({
    display: "flex",
    justifyContent: "center"
  }))
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
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Grid item xs={12} sm={6} sx={{pr:2}}>
            <Grid container spacing={1}>
              <Grid item>
                <img src={item.image} style={{ height: "45px", width: "45px" }} />
              </Grid>
              <Grid item >
                <Typography variant="body2" sx={{width: "100%", overflow: "hidden", textOverflow: "ellipsis"}}>{item.name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <IncreaQuantity>
              <Tooltip title="increase quantity">

              <IconButton onClick={()=> increase(item)}>
                <AddCircleSharpIcon sx={{color: "success.main"}} />
              </IconButton>
              </Tooltip>
              <InputBase type="number" value={item.quantity} sx={{width: "4ch"}}></InputBase>
              <Tooltip title="decrease quantity">

              <IconButton onClick={()=> {
                if(item.quantity > 1 ){
                  decrease(item)
                }
              }}>
                <RemoveCircleSharpIcon sx={{color: "error.main"}} />
              </IconButton>
              </Tooltip>
            </IncreaQuantity>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography align="center" sx={{overflow: "hidden"}}>{`$${item.price * item.quantity}`}</Typography>
          </Grid>
        </Grid>
      </CustomContainer>
    )
  );
};

export default SingleItem;
