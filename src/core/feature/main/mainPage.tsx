import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import styles from './main.module.scss';

export const MainPage = (): JSX.Element => {
  return (
    <Box className={styles.wrapper}>
      <AppBar>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h2">Main</Typography>
          <Button color="inherit">logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
