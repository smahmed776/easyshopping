import React from "react";
import {
  Box,
  Container,
  Typography,
  InputBase,
  Button,
  Link,
  Grid,
  IconButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import weaccept from "../../public/img/weaccept.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

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
      padding: theme.spacing(0, 0),
    },
    height: "100%",
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    right: '1px',
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
      width: "79.9%",
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
      <Box sx={{ bgcolor: "primary.main" }}>
        <Container>
          <Box
            flexDirection={"column"}
            sx={{
              padding: { xs: 0, md: 3 },
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
                <Button variant="contained" sx={{ borderRadius: "1.2rem" }}>
                  Subscribe
                </Button>
              </SearchIconWrapper>
            </Search>
          </Box>

          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "flex-start", p: 1 }}
          >
            {FooterLinks.map((i, index) => (
              <Grid item key={index}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  {i.name}
                </Typography>
                <ul className="navbar-nav" key={index}>
                  {i.sub.map((i, index) => (
                    <li
                      style={{ listStyleType: "none", padding: ".5rem" }}
                      key={index}
                    >
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
        </Container>
      </Box>

      <Container>
        <Grid container spacing={2} sx={{ p: 2, mt: 2, justifyContent: "flex-start" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" sx={{ p: 1 }}>
              We Accept:
            </Typography>
            <img src={weaccept.src} alt="" height="75px" width="100%" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p className="text-primary">Follow us on:</p>

            <a href="#">
              <Button color="primary" size="large" sx={{ p: 1 }}>
                <FacebookIcon sx={{ height: "2.5rem", width: "2.5rem" }} />
              </Button>
            </a>
            <a href="#">
              <Button color="error" size="large" sx={{ p: 1 }}>
                <YouTubeIcon sx={{ height: "2.5rem", width: "2.5rem" }} />
              </Button>
            </a>
            <a href="#">
              <Button color="primary" size="large" sx={{ p: 1 }}>
                <InstagramIcon sx={{ height: "2.5rem", width: "2.5rem" }} />
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p className="text-primary">Scan:</p>
            <img src={""} alt="" height="75px" width="100%" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p className="text-primary">Download Our App:</p>
            <img src={"playstore.src"} alt="" height="75px" width="100%" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              component={"div"}
              align="center"
              sx={{ p: 2 }}
            >
              1999-2021 All rights resereved by ImponExpo
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
