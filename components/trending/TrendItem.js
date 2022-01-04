import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Rating,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";




const TrendItem = ({cartItem, items, addItem, index, setOpenToast, setToastText }) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
      maxWidth: "75vw",
    },
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          whiteSpace: "nowrap",
          m: 0,
          p: 2,
        }}
        {...other}
      >
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const addObj = {
    ...items,
    itemName: items.name,
    price: items.price,
    profileURL: items.image,
    sno: 1,
  };

  return (
    <Box sx={{ px: 1, mb: 5 }} key={index}>
      <Card
        sx={{
          transition: "all 0.6s ease",
          boxShadow: 0,
          "&:hover": {
            cursor: "pointer",
            boxShadow: 5,
          },
        }}
      >
        <div style={{ overflow: "hidden", height: "200px" }}>
          <CardMedia
            sx={{
              transition: "all 0.6s ease",
              "&:hover": {
                transform: "scale(1.2, 1.2)",
              },
            }}
            component="img"
            height="194"
            image={items.image}
            alt="Paella dish"
          />
        </div>
        <CardContent>
          <Typography variant="body2" align={"center"} noWrap>
            {items.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" align="center">
            {items.type}
          </Typography>
          <Typography variant="subtitle2" sx={{ p: 1 }} align="center">
            {`$${items.price}`}
          </Typography>
          <Typography variant="body2" align="center">
            <Rating
              value={items.stars}
              align="center"
              precision={0.5}
              readOnly
            />
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Tooltip arrow title="add to favorites">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Add to cart">
            <Button onClick={()=> {
              addItem(items);
              setOpenToast(true);
              setToastText(`${cartItem.length} item added to cart`)
              }} variant="contained" size="small" sx={{ p: 1, color: "white", bgcolor: "primary.main" }}>
              <ShoppingCartIcon />
            </Button>
          </Tooltip>
          <Tooltip arrow title="See product details">
            <IconButton aria-label="share" onClick={handleOpen}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      {/* Product detail Modal  */}
      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <span
            style={{
              width: "85%",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {items.name}
          </span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
};

export default TrendItem;
