import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  IconButton,
  Divider,
  Card,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import PaymentSharpIcon from '@mui/icons-material/PaymentSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useCart } from "../custom hooks/cartHook";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const CheckoutPage = () => {
  const { cartItem } = useCart();
  const [totalAmount, setTotalAmount] = useState(() =>
    cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
  );
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(
    () => totalAmount - (totalAmount * discount) / 100
  );
  const [loading, setLoading] = useState(false);

  const DeliveryAddressIcon = () => {
    return (
      <IconButton sx={{ bgcolor: "rgba(0,0,0,0.04)" }}>
        <PlaceSharpIcon />
      </IconButton>
    );
  };

  const OrderSummeryIcon = () => {
    return (
      <IconButton sx={{ bgcolor: "rgba(0,0,0,0.04)" }}>
        <ShoppingCartCheckoutSharpIcon />
      </IconButton>
    );
  };

  const PaymentIcon = () => {
    return (
      <IconButton sx={{ bgcolor: "rgba(0,0,0,0.04)" }}>
        <PaymentSharpIcon />
      </IconButton>
    );
  };

  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

  const stripePromise = loadStripe(publishableKey);
  const createCheckOutSession = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const checkoutSession = await axios.post("/api/create-stripe-session", {
        items: cartItem.length > 0 ? cartItem.map(item=> ({
          price: finalPrice,
          image: item.image,
          name: item.name,
          description: item.description,
          quantity: item.quantity
        })) : [],
      });

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });
      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const coupon = [{text: "twenty", discount: 20}, {text: "ten", discount: 10}, {text: "tfive", discount: 25}, {text:"nineFive", discount: 95}]
  const checkCoupon = event => {
    if(event.key === "Enter"){
      if(coupon.find(c => c.text === event.target.value)){
        setDiscount(coupon[coupon.findIndex(c => c.text === event.target.value)].discount)
      } else {
        setDiscount(0)
      }
    }
  }

  useEffect(()=> {
    setFinalPrice( () => totalAmount - (totalAmount * discount) / 100)
  }, [discount, totalAmount])


  return (
    <Container>
      <Typography variant="h5" p={2}>
        Youre almost there..!
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        <Grid item xs={12} sm={8}>
          <Paper sx={{ p: 1 }}>
            <Box>
              <Stepper orientation="vertical">
                <Step active={true}>
                  <StepLabel StepIconComponent={DeliveryAddressIcon}>
                    Delivery Address
                  </StepLabel>
                  <StepContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4} sx={{ position: "relative" }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "35px",
                            width: "35px",
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                            position: "absolute",
                            top: 0,
                            right: "-4%",
                          }}
                        >
                          <CheckOutlinedIcon sx={{ color: "white" }} />
                        </Box>
                        <Box
                          sx={{ border: 1, borderColor: "primary.main", p: 2 }}
                        >
                          <Grid
                            container
                            sx={{ justifyContent: "space-around" }}
                          >
                            <Grid item>
                              <Typography variant="body1" sx={{ p: 1 }}>
                                Jhon Doe
                              </Typography>
                            </Grid>
                            <Grid item>
                              <IconButton>
                                <EditOutlinedIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                          <Typography variant="caption" sx={{ p: 1 }}>
                            124, Bangla motor , savar, Dhaka Bangladesh
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={4} sx={{ position: "relative" }}>
                        <Box
                          sx={{
                            p: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            bgcolor: "#7b7b7b2e",
                          }}
                        >
                          <IconButton>
                            <AddCircleOutlineOutlinedIcon />
                          </IconButton>
                          <Typography variant="subtitle2" p="3">
                            Add new delivery address
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </StepContent>
                </Step>

                {/* Order summery */}

                <Step active={true}>
                  <StepLabel StepIconComponent={OrderSummeryIcon}>
                    Order Summery
                  </StepLabel>
                  <StepContent>
                    <Box sx={{ p: { xs: 0, sm: 2 } }}>
                      {cartItem.length > 0 &&
                        cartItem.map((item, index) => (
                          <Box
                            key={index}
                            sx={{
                              py: 2,
                              m: { xs: 2, sm: 0 },
                              display: "flex",
                              flexDirection: { xs: "column", sm: "row" },
                              justifyContent: "space-around",
                              alignItems: "center",
                              width: "100%",
                              borderBottom: 1,
                              borderColor: "rgba(0,0,0,0.1)",
                            }}
                          >
                            <img
                              src={item.image}
                              style={{
                                height: "65px",
                                width: "65px",
                                objectFit: "cover",
                              }}
                              alt={item.name}
                            />
                            <Box sx={{ maxWidth: "380px", overflow: "hidden" }}>
                              <Typography
                                variant="body2"
                                sx={{ p: 2, textOverflow: "ellipsis" }}
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                align="center"
                              >{`$${item.price} X ${item.quantity}`}</Typography>
                            </Box>
                            <Typography variant="body2">{`$${
                              item.price * item.quantity
                            }`}</Typography>
                          </Box>
                        ))}
                    </Box>
                  </StepContent>
                </Step>
                <Step active={true}>
                  <StepLabel StepIconComponent={PaymentIcon}>
                    Payment Details
                  </StepLabel>
                  <StepContent>
                    <LoadingButton
                      onClick={createCheckOutSession}
                      startIcon={<PaymentSharpIcon />}
                      loading={loading}
                      loadingPosition="start"
                      variant="contained"
                      sx={{color:"white", bgcolor:"primary.main"}}
                    >
                      Buy Product
                    </LoadingButton>
                  </StepContent>
                </Step>
              </Stepper>
            </Box>
          </Paper>
        </Grid>

        {/* Price details  */}

        <Grid item xs={12} sm={4}>
          <Paper sx={{ borderTop: 2, borderColor: "primary.main" }}>
            <Typography align="center" variant="body2" sx={{ p: 1 }}>
              Price Details
            </Typography>
            <Divider />
            <List sx={{ p: 1 }}>
              <ListItem
                secondaryAction={
                  <Typography>{`$${parseFloat(totalAmount).toFixed(
                    2
                  )}`}</Typography>
                }
              >
                <ListItemText>Total price</ListItemText>
              </ListItem>
              <ListItem secondaryAction={<Typography>Free</Typography>}>
                <ListItemText>Delivery Charge</ListItemText>
              </ListItem>
              <ListItem secondaryAction={<Typography>{`${discount}%`}</Typography>}>
                <ListItemText>Discount</ListItemText>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <Typography>{`$${parseFloat(finalPrice).toFixed(
                    2
                  )}`}</Typography>
                }
              >
                <ListItemText>Total amount</ListItemText>
              </ListItem>
              <ListItem
                sx={{ color: "success.main", bgcolor: "rgba(0,0,0,0.04)" }}
                secondaryAction={
                  <Typography>{`$${parseFloat(
                    (totalAmount * discount) / 100
                  ).toFixed(2)}`}</Typography>
                }
              >
                <ListItemText>Total Savings</ListItemText>
              </ListItem>
            </List>
          </Paper>
          <Paper sx={{p:2, mt: 2, borderTop: 2, borderColor: "primary.main"}}>
            <Typography>Have Coupon ? put below:</Typography>
            {coupon.map(c => (

              <Typography key={c.text} sx={{color: "text.muted"}}>{c.text}</Typography>
            ))}
            <InputBase sx={{ pl:1,border: 1, borderColor: "primary.main", borderRadius: "15px"}} type="text" onKeyUp={checkCoupon}></InputBase>
          </Paper>
        </Grid>


      </Grid>
    </Container>
  );
};

export default CheckoutPage;
