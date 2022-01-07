import React, { forwardRef, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./footer";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Snackbar,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import RedeemIcon from "@mui/icons-material/Redeem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../custom hooks/cartHook";
import AppDrawer from "./AppDrawer";
import BreadCrumb from "./BreadCrumb";
import CustomIconButton from "../atoms/CustomIconButton";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";

const Layout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { itemCount, openToastContext, toastTextContext } = useCart();
  const [openToast] = openToastContext;
  const [toastText] = toastTextContext;

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const Search = styled("div")(({ theme }) => ({
    height: "50%",
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    border: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(7),
      marginRight: theme.spacing(7),
 
      width: "100%",
    },
  }));

  const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
    height: "100%",
    width: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid rgba(0,0,0,0.08)",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius:"8px",
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    "&:hover":{
      color:"white",
      backgroundColor: theme.palette.primary.dark
    }
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: theme.spacing(1),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "100%",
      },
    },
  }));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  useEffect(() => {
    setCartCount(itemCount);
  }, [itemCount]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          bgcolor: "secondary.light",
          p: 0.5,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "text.muted",
          flexWrap: 'wrap'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "primary.main" }}>
            <HeadsetMicIcon />
          </IconButton>
          <Typography variant="subtitle2">Call us at - + 88017XXXXXX</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "primary.main" }}>
            <PlaceSharpIcon />
          </IconButton>
          <Typography variant="subtitle2">
            Acme Widgets 123 Widget Street Acmeville, AC 12345
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button>Sign In</Button>
          <Typography sx={{p:1}}>or</Typography>
          <Button>Sign Up</Button>
        </div>
      </Box>
      <AppBar
        position="sticky"
        sx={{ bgcolor: "white", color: "black", boxShadow: 0, borderBottom: 1, borderColor: "rgba(0,0,0,0.3)" }}
      >
        <Toolbar sx={{ alignItems: "center", height: "75px" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { lg: "none", sm: "block" } }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <a>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "serif",
                  "&:hover":{
                    color:"primary.main"
                  }
                }}
              >
                EasyShopping
              </Typography>
            </a>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search your product…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", } }}>
            <CustomIconButton size="medium" sx={{display: {xs: "none", md: "flex"}}}>
              <Badge badgeContent={4} color="error">
                <RedeemIcon />
              </Badge>
            </CustomIconButton>
            <Link href="/cart">
              <a>
                <CustomIconButton
                  size="medium"
                  aria-label={`show ${cartCount} new notifications`}
                  sx={{ mx: 1 }}
                >
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </CustomIconButton>
              </a>
            </Link>
          </Box>
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <RedeemIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <Link href="/cart">
            <a>
              <IconButton
                size="large"
                aria-label={`show ${cartCount} new notifications`}
                color="inherit"
              >
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <span>Cart</span>
            </a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorEl}
        id={menuId}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        keepMounted
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
      <AppDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <div style={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
        <BreadCrumb />
        {children}
        <Snackbar open={openToast} autoHideDuration={6000}>
          <Alert
            severity="success"
            sx={{ bgcolor: "success.main", color: "white", width: "100%" }}
          >
            {toastText}
          </Alert>
        </Snackbar>
      </div>
      <Footer />
    </Box>
  );
};

export default Layout;
