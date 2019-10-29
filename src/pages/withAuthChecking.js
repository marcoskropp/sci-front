import React, { forwardRef, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  AppBar,
  Box,
  CircularProgress,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { Dashboard, Menu } from "@material-ui/icons";
import { checkAuth } from "../services/Auth.services";

export default function withAuthChecking(WrappedComponent) {
  return function(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [drawerOpened, setDrawerOpened] = useState(false);

    const link = forwardRef((props, ref) => <Link {...props} ref={ref} />);

    useEffect(() => {
      const check = async () => {
        if (loading) {
          const response = await checkAuth();
          setIsAuthenticated(response);
          setLoading(false);
        }
      };
      check();
    }, [loading]);

    const toggleDrawer = () => {
      setDrawerOpened(!drawerOpened);
    };

    const renderDrawOptions = () => (
      <List style={{ minWidth: 250 }}>
        <ListItem button component={link} to="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
      </List>
    );

    return loading ? (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress color="primary" size={70} />
      </Box>
    ) : isAuthenticated ? (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={drawerOpened} onClose={toggleDrawer}>
          {renderDrawOptions()}
        </Drawer>
        <WrappedComponent {...props} />
      </>
    ) : (
      <Redirect to="/" />
    );
  };
}
