import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ContactsIcon from "@mui/icons-material/Contacts";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Logo from "../assets/images/Logo.png";
import AvatarIcon from "../assets/images/4.jpg";
import MenuIcon from "@mui/icons-material/Menu";

const settings = ["Profile", "Account"];

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="sticky" className="navBar">
      <Container maxWidth="xl" sx={{ background: "white", color: "#10002B" }}>
        <Toolbar disableGutters>
          <Link to={"/"}>
            <img
              src={Logo}
              className="navBar-logo"
              alt="Logo"
              style={{ width: "200px" }}
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              },
            }}
          >
            <Link
              to={"/Rent"}
              className="header-link"
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  my: 2,
                  color: "#3f3e3e",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <MapsHomeWorkIcon sx={{ mr: 1 }} />
                Rent
              </MenuItem>
            </Link>
            <Link
              to={"/Guide"}
              className="header-link"
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  my: 2,
                  color: "#3f3e3e",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <HelpIcon sx={{ mr: 1 }} />
                Guide
              </MenuItem>
            </Link>
            <Link
              to={"/Contact"}
              className="header-link"
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  my: 2,
                  color: "#3f3e3e",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <ContactsIcon sx={{ mr: 1 }} />
                Contact Us
              </MenuItem>
            </Link>
            <Link
              to={"/fAVOURITE"}
              className="header-link"
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  my: 2,
                  color: "#3f3e3e",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                <ContactsIcon sx={{ mr: 1 }} />
                Contact Us
              </MenuItem>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleToggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <Box sx={{ position: "absolute", top: "100%", right: 0 }}>
              <MenuItem onClick={handleToggleMobileMenu}>
                <Link
                  to={"/Rent"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Rent
                </Link>
              </MenuItem>
              <MenuItem onClick={handleToggleMobileMenu}>
                <Link
                  to={"/Guide"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Guide
                </Link>
              </MenuItem>
              <MenuItem onClick={handleToggleMobileMenu}>
                <Link
                  to={"/Contact"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact Us
                </Link>
              </MenuItem>
            </Box>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src={AvatarIcon} />
              </IconButton>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link
                    to={`/${setting}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
