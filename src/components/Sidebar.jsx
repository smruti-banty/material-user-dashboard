import { Link } from "react-router-dom";

import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddchartIcon from '@mui/icons-material/Addchart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";

const FlexBox = styled(Box)({
  backgroundColor: "white",
  height: "100%",
  boxShadow: 3,
  padding: "1rem",
});

const SideBar = () => {
  return (
    <FlexBox>
      <Box>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={logo} />
          </ListItemAvatar>
          <ListItemText primary="User" secondary="Dashboard" />
        </ListItem>
      </Box>
      <Divider />
      <NavLinks />
    </FlexBox>
  );
};

export default SideBar;

function NavLinks() {
  const location = useLocation().pathname;

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        LinkComponent={Link}
        to="/"
        sx={{
          bgcolor: location == "/" ? "#eee" : "transparent",
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton
        LinkComponent={Link}
        to="/users"
        sx={{
          bgcolor: location == "/users" ? "#eee" : "transparent",
        }}
      >
        <ListItemIcon>
          <PersonAddAltIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>

      <ListItemButton
        LinkComponent={Link}
        to="/roles"
        sx={{
          bgcolor: location == "/roles" ? "#eee" : "transparent",
        }}
      >
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <ListItemText primary="Roles" />
      </ListItemButton>

      <ListItemButton
        LinkComponent={Link}
        to="/roles"
        sx={{
          bgcolor: location == "/statistics" ? "#eee" : "transparent",
        }}
      >
        <ListItemIcon>
          <AddchartIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
      </ListItemButton>

      <ListItemButton
        LinkComponent={Link}
        to="/roles"
        sx={{
          bgcolor: location == "/setting" ? "#eee" : "transparent",
        }}
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>

      <ListItemButton
        LinkComponent={Link}
        to="/roles"
        sx={{
          bgcolor: location == "/logout" ? "#eee" : "transparent",
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
