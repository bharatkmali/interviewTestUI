import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import PeopleIcon from "@mui/icons-material/People";
const navItems = [
  { name: "Products", icon: <HomeIcon /> },
  { name: "Profile", icon: <RecentActorsIcon /> },
  { name: "pipelines", icon: <PeopleIcon /> },
  { name: "Products", icon: <HomeIcon /> },
  { name: "Profile", icon: <RecentActorsIcon /> },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
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
    <Box paddingX={4}>
      <AppBar
        position="fixed"
        sx={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          backgroundColor: "#e1ecec",
          width: { sm: `calc(100% - 120px)` },
          ml: { sm: `240px` },
        }}
      >
        <Container maxWidth="xl">
          <List sx={{ display: "flex", paddingTop: 0, width: "100%", gap: 2 }}>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    alignContent: "center",
                    backgroundColor: "#3a7a78",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px", color: "whitesmoke" }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} sx={{ color: "whitesmoke", fontWeight: 600 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Container>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
