import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../feature/authFlow/authFlow.selectors';
import { AppState } from '../../store/store';

interface PrivateRouteProps {
  component: React.FunctionComponent<RouteProps>;
  path: string;
  exact?: boolean;
}

// eslint-disable-next-line react/prop-types
export const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({ component: Component }) => {
  const isLoggedIn = useSelector((state: AppState) => getIsLoggedIn(state));

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      render={(props): JSX.Element => (!isLoggedIn ? <Redirect to="/login" /> : <Component {...props} />)}
    />
  );
};
