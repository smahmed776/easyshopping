import React from "react";
import {Box, Container, Typography, InputBase, Button, Link, Grid } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const Footer = () => {
  const FooterLinks = [
    {
      name: "Customer Care",
      sub: [
        "Help Center",
        "how to buy",
        "Group input",
        "Returns & Refunds",
        "Imponexpo Shop",
        "Contact Us",
        "Purchase Protection",
        "Others",
      ],
    },
    {
      name: "Categories",
      sub: ["Sports", "Garden Equipments", "Home Products", "Car Accessories"],
    },
    {
      name: "Services",
      sub: [
        "Graphics Design",
        "Digital Marketing",
        "Video & Animation",
        "Audio & Music",
        "Programming & Tech",
      ],
    },
    {
      name: "ImponExpo",
      sub: [
        "About us",
        "Digital Payment",
        "ImponExpo Blog",
        "ImponExpo Care",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      name: "Make money with us",
      sub: [
        "Become a ImponExpo Seller",
        "Join Affiliate Marketing",
        "Sell Products on ImponExpo",
      ],
    },
  ];

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 0),
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 2)
    },
    height: "100%",
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "1.2rem",
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "60%",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "60%",
    [theme.breakpoints.up("md")]: {
        width: "79.9%"
    },
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 0, 1, 1.8),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "76.7%",
      },
    },
  }));

  return (
    <footer className="bg-white border-top mt-2">
      <Box sx={{ bgcolor: "primary.dark" }}>
        <Container>
          <Box
            flexDirection={"column"}
            sx={{
              padding: {"xs": 0, md: 3},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              align="center"
              variant="body2"
              component={"div"}
              color="white"
              sx={{ p: 2 }}
            >
              Yes! send me exclusive offers, unique gift ideas, personalized
              tips for shopping and selling on imponexpo
            </Typography>
            <Search>
              <StyledInputBase
                type="email"
                placeholder="enter your email here..."
                inputProps={{ "aria-label": "enter email" }}
              />
              <SearchIconWrapper>
                <Button variant="contained" sx={{ borderRadius: "1.2rem", }}>
                  Subscribe
                </Button>
              </SearchIconWrapper>
            </Search>
          </Box>
          <div className="container d-flex flex-column justify-content-center align-items-center py-2 px-4">
            <div className="container mt-3 pt-2">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gy-3">
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: "space-around", p: 1 }}
                >
                  {FooterLinks.map((i, index) => (
                    <Grid item key={index}>
                      <Typography variant="h6" sx={{color:"white"}}>{i.name}</Typography>
                      <ul className="navbar-nav" key={index}>
                        {i.sub.map((i, index) => (
                          <li style={{ listStyleType: "none", padding: ".5rem" }}>
                            <Link
                              href="#"
                              variant="body2"
                              component={"a"}
                              sx={{ color: "white", p: 1 }}
                            >
                              {i}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </Container>
      </Box>

      <div className="container">
        <div className="row justify-content-center py-5 align-items-center gx-5">
          <div className="col-12 col-sm-6 col-md-4">
            <p className="text-primary">We Accept:</p>
            <img src={"weaccept.src"} alt="" height="75px" width="100%" />
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <p className="text-primary">Follow us on:</p>
            <div className="d-flex justify-content-evenly text-primary ">
              <span className="bi bi-facebook"></span>
              <span className="bi bi-youtube"></span>
              <span className="bi bi-instagram"></span>
              <span className="bi bi-skype"></span>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <p className="text-primary">Scan:</p>
            <img src={""} alt="" height="75px" width="100%" />
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <p className="text-primary">Download Our App:</p>
            <img src={"playstore.src"} alt="" height="75px" width="100%" />
          </div>
          <div className="col-12 d-flex justify-content-center px-4 pt-5 mt-3 pb-1">
            <p>1999-2021 All rights resereved by ImponExpo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
