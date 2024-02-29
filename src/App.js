import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TabsComponets from "./Components/TabsComponets";
import ResponsiveAppBar from "./Common/Appbar";
import CreateLeadDetails from "./Components/CreateLeadDetails";
import { Grid } from "@mui/material";
import ListOfLeads from "./Components/ListOfLeads";
const drawerWidth = 120;
const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {["Inbox", "Starred", "Send email", "Drafts", "All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            sx={{
              my: "10px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                color: "whitesmoke",
                fontSize: "20px",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText sx={{ color: "whitesmoke", fontSize: "20px" }} primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);

export default function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const loopArray = new Array(50).fill(null);

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <ResponsiveAppBar />
      <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, backgroundColor: "#397a78" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container display={"flex"} sx={{ gap: 3, flexWrap: { md: "nowrap", xs: "wrap" } }}>
          <Grid item>
            <CreateLeadDetails />
          </Grid>
          <Grid container spacing={3} sx={{ overflow: "auto", height: "calc(113vh - 100px - 100px)" }}>
            {loopArray.map((obj) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  {/* // <Grid item xs={12} sm={12} md={12}> */}
                  <ListOfLeads data={obj} />
                  {/* // </Grid> */}
                </Grid>
              );
            })}
          </Grid>
          {/* <Grid item display={"flex"} flexWrap={"wrap"} sx={{ gap: 3, justifyContent: "space-between" }}>
            {loopArray.map((obj) => {
              return <ListOfLeads data={obj} />;
            })}
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
