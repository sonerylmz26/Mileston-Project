import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const pages = [
    {
        title: "Dashboard",
        url: "/",
    },
    {
        title: "New Blog",

        url: "/new-blog",
    },
    {
        title: "About",
        url: "/about",
    },
];

const NavBar = () => {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.auth);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: "lightgreen", color: "black" }}
        >
            <CssBaseline />
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={()=>navigate("/")}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        BLOG-APP
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: "block",
                                    md: "none",
                                    color: "black",
                                },
                            }}
                        >
                            {pages.map((item, i) => (
                                <MenuItem
                                    key={i}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Button
                                 component="button"
                                    sx={{ color: "black", textAlign: "center" }}
                                    onClick={()=> navigate(item.url) }
                                    >
                                        {item.title}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={()=>navigate("/")}
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        BLOG-APP
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((item , index) => (
                            <Button 
                            component="h4"
                                key={index}
                                onClick={
                                  ()=>{
  handleCloseNavMenu
  navigate(item.url)
                                  }
                                }
                                sx={{ my: 2, color: "white", display: "block" , textAlign: "center" }}
                                
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px", color: "black" }}
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
                            {currentUser ? (
                                <MenuItem
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Link to="myBlog" textAlign="center">
                                        My Blogs
                                    </Link>
                                    <Link textAlign="center">Profile</Link>
                                    <Link textAlign="center">Logout</Link>
                                </MenuItem>
                            ) : (
                                <Button
                                    textAlign="center"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </Button>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
