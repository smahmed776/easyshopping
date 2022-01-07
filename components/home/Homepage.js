import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import Trending from "./trending/Trending";
import FeaturedItem from "./Features/FeaturedItem";
import Carousel from "../carousel/carousel";
import ViewListIcon from "@mui/icons-material/ViewList";
import Electronics from "./Electronics";

const Homepage = () => {
  const svgs = [
    "https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner01.svg",
    "https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner02.svg",
    "https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner03.svg",
  ];

  return (
    <main>
      <Grid container>
        <Grid item sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <Box
            sx={{
              bgcolor: "primary.dark",
              color: "white",
              p: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "35px",
            }}
          >
            <Typography component={"span"} sx={{ px: 1 }}>
              Categories
            </Typography>
            <ViewListIcon />
          </Box>
          <Box sx={{ bgcolor: "primary.light", p: 1 }}>
            <List>
              {categories.map((cat, index) => (
                <ListItem key={index}>
                  <ListItemText>{cat.title}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box
            sx={{
              bgcolor: "primary.main",
              height: {xs:"auto", sm:"35px"},
              color: "white",
              p: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {navList.map((nav) => (
              <Box component={"span"} key={nav} sx={{ p: {xs:0, md:1}, margin: "1rem" }}>
                {nav}
              </Box>
            ))}
          </Box>
          <Carousel />
        </Grid>
      </Grid>
      <Container>
        <Grid container spacing={3} sx={{ my: 1.5 }}>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                bgcolor: "primary.light",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                boxShadow: 0,
              }}
            >
              <img
                src="https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner01.svg"
                style={{ marginTop: ".5rem" }}
              />
              <Typography variant="h6" sx={{ p: 1, mt: 1 }}>
                Free to Delivery
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.muted", width: "75%", p: 1 }}
              >
                lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla libero ipsum velit qui suscipit. Ut nemo
                reprehenderit corrupti provident ducimus harum hic dolor
                recusandae pariatur
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                bgcolor: "primary.light",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                boxShadow: 0,
              }}
            >
              <img
                src="https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner02.svg"
                style={{ marginTop: ".5rem" }}
              />
              <Typography variant="h6" sx={{ p: 1, mt: 1 }}>
                Days Free Return
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.muted", width: "75%", p: 1 }}
              >
                lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla libero ipsum velit qui suscipit. Ut nemo
                reprehenderit corrupti provident ducimus harum hic dolor
                recusandae pariatur
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                bgcolor: "primary.light",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                boxShadow: 0,
              }}
            >
              <img
                src="https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner03.svg"
                style={{ marginTop: ".5rem" }}
              />
              <Typography variant="h6" sx={{ p: 1, mt: 1 }}>
                Cash On Delivery
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.muted", width: "75%", p: 1 }}
              >
                lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla libero ipsum velit qui suscipit. Ut nemo
                reprehenderit corrupti provident ducimus harum hic dolor
                recusandae pariatur
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Trending />
        <Grid container sx={{ p: 1, my: 1 }} spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={[
                { overflow: "hidden", height: "170px" },
                {
                  "&:hover": {
                    cursor: "pointer",
                    position: "relative",
                    "&>img": {
                      transform: "scale(1.2, 1.2)",
                    },
                    "&>div": {
                      display: "block!important",
                      opacity: 0.3,
                    },
                  },
                },
              ]}
            >
              <div
                style={{
                  display: "none",
                  transition: "display 0.5s ease",
                  zIndex: "3",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "black",
                  top: 0,
                  left: 0,
                }}
              ></div>
              <img
                src="https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner04.jpg"
                style={{
                  transition: "all 0.6s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={[
                { overflow: "hidden", height: "170px" },
                {
                  "&:hover": {
                    cursor: "pointer",
                    position: "relative",
                    "&>img": {
                      transform: "scale(1.2, 1.2)",
                    },
                    "&>div": {
                      display: "block!important",
                      opacity: 0.3,
                    },
                  },
                },
              ]}
            >
              <div
                style={{
                  display: "none",
                  transition: "display 0.5s ease",
                  zIndex: "3",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "black",
                  top: 0,
                  left: 0,
                }}
              ></div>
              <img
                src="https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner05.jpg"
                style={{
                  transition: "all 0.6s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={[
                { overflow: "hidden", height: "170px" },
                {
                  "&:hover": {
                    cursor: "pointer",
                    position: "relative",
                    "&>img": {
                      transform: "scale(1.2, 1.2)",
                    },
                    "&>div": {
                      display: "block!important",
                      opacity: 0.3,
                    },
                  },
                },
              ]}
            >
              <div
                style={{
                  display: "none",
                  transition: "display 0.5s ease",
                  zIndex: "3",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "black",
                  top: 0,
                  left: 0,
                }}
              ></div>
              <img
                src="https://tvlgiao.github.io/bigcommerce-themes/electronics/demo/images/banner06.jpg"
                style={{
                  transition: "all 0.6s ease",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ p: 1, mt: 1 }}>
          <FeaturedItem />
        </Box>
        <Electronics />
      </Container>
    </main>
  );
};

const navList = ["Shipping and Returns", "Contact Us", "Rss Syndation"];

const categories = [
  { title: "Fashion", url: "/fashion" },
  { title: "Jewelary", url: "/jewelary" },
  { title: "Digital", url: "/digital" },
  { title: "Entertainment", url: "/entertainment" },
  { title: "Electronics", url: "/electronics" },
  { title: "Sports", url: "/sports" },
  { title: "Utilities", url: "/utilities" },
];

export default Homepage;
