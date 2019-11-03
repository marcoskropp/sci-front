import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Box, CircularProgress } from '@material-ui/core';
import { checkAuth } from '../services/Auth.services';

export default function withAuthChecking(WrappedComponent) {
  return function (props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

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
        <br />
        <WrappedComponent {...props} />
      </>
    ) : (
      <Redirect to="/" />
    );
  };
}
