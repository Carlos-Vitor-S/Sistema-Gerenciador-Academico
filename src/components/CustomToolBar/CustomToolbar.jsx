import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/fabtech-logo-white-small.png";
import css from "./CustomToolBar.module.css";

const pages = ["Alunos", "Cursos", "Contratos", "Relatorios"];
const settings = ["Logout"];

export default function CustomToolBar() {
  const InactiveButton = styled(Button)({
    textTransform: "none",
    fontSize: "0.95rem",
    color: "var(--fontColorLight)",

    "&:hover": {
      backgroundColor: "var(--snackBarColor)",
      transition: "0.8s ease-in-out",
    },
  });

  const ActiveButton = styled(Button)({
    textTransform: "none",
    fontSize: "0.95rem",
    color: "var(--fontColorLight)",
    backgroundColor: "var(--snackBarColor)",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  function onClickNavigate(page) {
    navigate(`/${page.toLowerCase()}`);
    setOpenDrawer(false);
  }

  function onClickNavegateHome() {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "var(--primaryColor)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Logo" onClick={onClickNavegateHome} />
          </Typography>

          {/* Menu para telas pequenas */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer para telas pequenas */}
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={handleToggleDrawer}
              sx={{
                display: { xs: "block", md: "none" },
                width: 250,
                "& .MuiDrawer-paper": {
                  width: 250,
                  backgroundColor: "var(--primaryColor)",
                  color: "var(--fontColorLight)",
                },
              }}
            >
              <Box
                sx={{
                  width: 250,
                  padding: "16px",
                  backgroundColor: "var(--primaryColor)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    marginBottom: "16px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Opções
                </Typography>

                <List>
                  {pages.map((page) => {
                    const isActive =
                      location.pathname === `/${page.toLowerCase()}`;
                    return isActive ? (
                      <ListItem
                        button
                        key={page}
                        onClick={() => onClickNavigate(page)}
                        sx={{ backgroundColor: "var(--snackBarColor)" }}
                      >
                        <ListItemText primary={page} />
                      </ListItem>
                    ) : (
                      <ListItem
                        button
                        key={page}
                        onClick={() => onClickNavigate(page)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "var(--snackBarColor)",
                            transition: "0.8s ease-in-out",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <ListItemText primary={page} />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Logo" onClick={onClickNavegateHome} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "0.5rem" },
            }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === `/${page.toLowerCase()}`;
              return isActive ? (
                <ActiveButton key={page} onClick={() => onClickNavigate(page)}>
                  {page}
                </ActiveButton>
              ) : (
                <InactiveButton
                  key={page}
                  onClick={() => onClickNavigate(page)}
                >
                  {page}
                </InactiveButton>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon fontSize="large" className={css.avatar} />
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
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
