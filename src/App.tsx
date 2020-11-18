import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
// import styles from './app.module.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LoginPage } from './core/feature/authFlow/containers/loginPage/loginPage';
import { MainPage } from './core/feature/main/mainPage';

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
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/login" exact component={LoginPage} />
            {/* <Route path="/registration" exact component={} /> */}
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
}

export default App;
