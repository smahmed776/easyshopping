import React from 'react'
import {styled} from "@mui/material/styles";
import { Container, Box, Typography, Grid, } from "@mui/material"

const SingleItem = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        "&.MuiContainer-root": {
          padding: theme.spacing(0, 0),
          margin: theme.spacing(1, 0),
        },
      }));
    return (
        <CustomContainer
        sx={{
          border: 1,
          borderColor: "#dee2e6",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(248,249,250)",
            p: 1,
            borderBottom: "1px solid #dee2e6",

            maxWidth: "100%",
            width: "100%",
          }}
        >
          <Typography align="left" variant="body2">
            Package 1 of 1
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <img src="as" style={{ height: "45px", width: "45px" }} />
              </Grid>
              <Grid item>
                <Typography>Nike shoe</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>1</Typography>
          </Grid>
          <Grid item>
            <Typography>$12.0</Typography>
          </Grid>
        </Grid>
      </CustomContainer>
    )
}

export default SingleItem
