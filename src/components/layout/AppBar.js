import * as React from 'react';

import { useContext,useEffect,useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/MessageRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple} from '@mui/material/colors';

import CreateUser from '../create-user/CreateUser';
import { Redirect, Route, Router, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import { useAuth } from '../../context/auth-context';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const { logout, loggedIn, getCurrentUser } = useAuth();
  const [profileInfo,setProfileInfo] = useState();

  useEffect(()=>{
    let user = getCurrentUser();
    if(user){
      setProfileInfo(`${user.data.user_name} (${user.data.role < 2?"Admin":"User"})`);
    }
  },[])


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  function logoutClickHandler() {
    logout();
  }

  function handleMenuClick() {
    setOpen(false);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Fittness & Maddness
          </Typography>
          <Tooltip title={profileInfo}>
          <Avatar className="avatarHover"
            sx={{ bgcolor: deepOrange[500] }}>{getCurrentUser().data?.user_name.substring(0, 2)}
          </Avatar>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/dashboard" style={{ textDecoration: 'none' }} onClick={handleMenuClick}>Dashboard</Link>

          </ListItem>
          {getCurrentUser().data.role < 2 &&
            <ListItem button>

              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <Link to="/create" style={{ textDecoration: 'none' }} onClick={handleMenuClick}>Create Account</Link>

            </ListItem>}

          <ListItem button>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={"Chat Room"} />

          </ListItem>
        </List>

        <Divider />
        <List>

          <ListItem button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <Button onClick={() => { logout() }}>Log Out</Button>
          </ListItem>

        </List>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />

      </Main>
    </Box>
  );
}
