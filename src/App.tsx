import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PrivateRoute } from './core/shared/privateRoute/privateRoute';
import { LoginPage } from './core/feature/authFlow/containers/loginPage/loginPage';
import MainPage from './core/feature/main/mainPage';
import { RegisterPage } from './core/feature/authFlow/containers/register/registerPage';
import history from './history';

function App(): JSX.Element {
  return (
    <>
      <StylesProvider injectFirst>
        <Helmet>
          <title>Simple auth</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/registration" exact component={RegisterPage} />
            <PrivateRoute path="/" component={MainPage} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
}

export default App;
