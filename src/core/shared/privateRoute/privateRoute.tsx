import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from '../../feature/authFlow/authFlow.selectors';
// import { AppState } from '../../store/store';

interface PrivateRouteProps {
  component: ReactNode;
  path: string;
  exact?: boolean;
}

export const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({ component: Child }) => {
  // const isLoggedIn = useSelector((state: AppState) => getIsLoggedIn(state));
  const hasToken = localStorage.getItem('accessToken');

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      render={(props): ReactNode => (!hasToken ? <Redirect to="/login" /> : <Child {...props} />)}
    />
  );
};
