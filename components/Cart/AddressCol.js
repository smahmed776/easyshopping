import React, { useState, useEffect} from 'react';
import {Container, Grid, Typography, Divider, IconButton, Button, List, ListItem, ListItemText} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Link from 'next/link';

const AddressCol = ({cartItem}) => {
  const [disable, setDisable] = useState(Boolean);
  useEffect(()=>{
    if(cartItem.length > 0){
      console.log("disable false")
      setDisable(false)
    } else {
      console.log("disable true")
      setDisable(true)
    }
  }, [cartItem])
    return (
        <Container
        sx={{
          border: 1,
          borderTop: 3,
          borderColor: "#dee2e6",
          borderTopColor: "primary.main",
          p: 1,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px"
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <List>
              <ListItem secondaryAction={<Typography variant="body2" sx={{color: "secondary.main"}}>{cartItem.reduce((total, item)=> total + item.quantity, 0)}</Typography>}>
                <ListItemText>Total Product:</ListItemText>
              </ListItem>
              <ListItem secondaryAction={<Typography variant="body2" sx={{color: "secondary.main"}}>{cartItem.reduce((total, item )=> total + item.price * item.quantity, 0)}</Typography>}>
                <ListItemText>Total Price:</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Shipping Address:</Typography>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  component={"div"}
                  sx={{ p: 1, color: "#6c757d" }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum, dicta voluptatum. Tempora porro at laborum incidunt
                  iure dolore deserunt. Soluta sunt laboriosam facilis
                  similique fugit mollitia expedita magnam voluptatum. Vel.
                  Aspernatur, quia voluptas odit, quam adipisci dolore aut
                  non unde at deleniti similique cum consequuntur ex illum
                  nemo animi? Totam eos quidem culpa quod, ratione similique
                  ullam inventore amet beatae.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="subtitle1"
                  component={"div"}
                  color="primary.main"
                  align="center"
                >
                  Edit
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          sx={{
            my: 1,
          }}
        />
        <div style={{ padding: "1rem", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <IconButton sx={{mr:1}}>
              <PhoneInTalkIcon />
          </IconButton>
          <Typography variant="body2">+9901466484</Typography>
        </div>
        <Divider
          sx={{
            my: 1,
          }}
        />
        <div style={{padding: "1rem"}}>
          <Link href="/cart/checkout">
            <Button variant="contained" disabled={disable} sx={{width: "100%"}}>
                Proceed to Checkout
            </Button>
          </Link>
        </div>
      </Container>
    )
}

export default AddressCol
