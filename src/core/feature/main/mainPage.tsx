import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Action, Dispatch } from 'redux';
import styles from './main.module.scss';
import { withAuth } from '../../hoc/withAuth';
import { LogoutAct, GetNewAccessTokenAct, GetNameAct } from '../authFlow/authFlow.actions';
import { getName } from '../authFlow/authFlow.selectors';
import { AppState } from '../../store/store';

const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const name = useSelector((state: AppState) => getName(state));

  useEffect(() => {
    dispatch(new GetNameAct());
  }, []);

  return (
    <Box className={styles.wrapper}>
      <AppBar>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h2">Main</Typography>
          <Button color="inherit">logout</Button>
        </Toolbar>
      </AppBar>
      <Typography className={styles.name} variant="h4">
        Hi {name}!
      </Typography>
    </Box>
  );
};

interface MapDispatchInterface {
  LogoutAct: () => Action;
  getNewAccessToken: () => Action;
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchInterface => {
  return {
    LogoutAct: (): Action => dispatch(new LogoutAct()),
    getNewAccessToken: (): Action => dispatch(new GetNewAccessTokenAct()),
  };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default connect(null, mapDispatchToProps)(withAuth(MainPage));
