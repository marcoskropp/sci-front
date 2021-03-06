import React, { useState, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  AppBar,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';
import {
  Dashboard,
  Menu,
  List as ListIcon,
  ExitToApp,
  PlaylistAdd
} from '@material-ui/icons';

import { logout } from '../services/Auth.services';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function withBars(WrappedComponent) {
  return function (props) {
    const [drawerOpened, setDrawerOpened] = useState(false);
    const classes = useStyles();
    const link = forwardRef((props, ref) => <Link {...props} ref={ref} />);

    const toggleDrawer = () => {
      setDrawerOpened(!drawerOpened);
    };

    const renderDrawOptions = () => (
      <List style={{ minWidth: 300 }}>
        <ListItem button component={link} to="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem button component={link} to="/subscriptions">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>Inscrições</ListItemText>
        </ListItem>
        <ListItem button component={link} to="/workshops/create">
          <ListItemIcon>
            <PlaylistAdd />
          </ListItemIcon>
          <ListItemText>Cadastrar oficina</ListItemText>
        </ListItem>
      </List>
    );

    const handleLogout = async () => {
      await logout();
      /* eslint react/prop-types: 0 */
      props.history.push('/');
    };

    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={toggleDrawer}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              App
            </Typography>
            <IconButton edge="end" color="inherit" onClick={handleLogout}>
              <ExitToApp />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={drawerOpened}
          onOpen={toggleDrawer}
          onClose={toggleDrawer}
        >
          {renderDrawOptions()}
        </SwipeableDrawer>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBars;
