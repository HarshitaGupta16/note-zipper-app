import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Typography,
  Button,
  InputBase,
  Menu,
  Tooltip,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = (props) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      //   backgroundColor: alpha(theme.palette.common.white, 0.25),
      backgroundColor: "white",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    color: "gray",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#158cba",
        }}
      >
        <Typography variant="h6" component="div">
          Simply Notes
        </Typography>
        <Box>
          <Search sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ color: "#fff", textTransform: "none", marginRight: 5 }}>
            My Notes
          </Button>

          <Tooltip title="View Options" arrow>
            <Box
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                color: "white",
                fontSize: "1rem",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Harshita Gupta
              <ArrowDropDownIcon style={{ marginTop: "2px" }} />
            </Box>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">My Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
