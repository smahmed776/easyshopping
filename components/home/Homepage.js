import React from "react";
import { Container, Box, Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import Trending from "../trending/Trending";
import FeaturedItem from "../Features/FeaturedItem";
import Carousel from "../carousel/carousel";
import ViewListIcon from "@mui/icons-material/ViewList";

const Homepage = () => {
  return (
    <main>
      <Grid container>
        <Grid item sm={3} sx={{display: {xs: "none", sm: "block"}}}>
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
          <Box sx={{bgcolor: "primary.light", p:1}}>
              <List>
                  <ListItem>
                      <ListItemText>Fashion</ListItemText>
                  </ListItem>
              </List>

          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box
            sx={{
              bgcolor: "primary.main",
              height: "35px",
              color: "white",
              p: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {navList.map(nav => (
                <span key={nav} style={{padding: "1rem", margin: "1rem"}}>{nav}</span>
            ))}
          </Box>
          <Carousel />
        </Grid>
      </Grid>
      <Container>
        <Trending />
        <Box sx={{ p: 1, mt: 1 }}>
          <FeaturedItem />
        </Box>
      </Container>
    </main>
  );
};

const navList = [
    "Shipping and Returns",
    "Contact Us",
    "Rss Syndation"
]

export default Homepage;
