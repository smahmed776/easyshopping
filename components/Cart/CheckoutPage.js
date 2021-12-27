import React, { useState } from "react";
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
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import PaymentSharpIcon from "@mui/icons-material/PaymentSharp";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const steps = [
  {
    label: "Delivary Address",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const CheckoutPage = ({ cartItem }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [totalAmount, setTotalAmount] = useState(() =>
    cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
  );
  const [discount, setDiscount] = useState(10);
  const [finalPrice, setFinalPrice] = useState(
    () => totalAmount - (totalAmount * discount) / 100
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
                              borderColor: "rgba(0,0,0,0.1)"
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
                <Step>
                  <StepLabel StepIconComponent={PaymentIcon}>
                    Payment Details
                  </StepLabel>
                  <StepContent>
                    <Typography>Delivery</Typography>
                  </StepContent>
                </Step>
              </Stepper>
            </Box>
          </Paper>
        </Grid>

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
              <ListItem secondaryAction={<Typography>10%</Typography>}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;