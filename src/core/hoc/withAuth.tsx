import React, { Component, ReactElement, ReactNode } from 'react';
import { Action } from 'redux';
import { ax } from '../api/request';

interface ComposedComponentProps {
  loginOutAct: () => Action;
  getNewAccessToken: () => Action;
}

export const withAuth = (WrappedComponent: ReactElement<JSX.Element>): ReactNode => {
  class ComposedComponent extends Component<ComposedComponentProps> {
    requestInterceptor = ax.interceptors.request.use((req) => {
      const token = localStorage.getItem('accessToken');
      req.headers.Authorization = `Bearer ${token}`;
      return req;
    });

    responseInterceptor = ax.interceptors.response.use(
      (res) => res,
      (error) => {
        const { status } = error;
        const { loginOutAct, getNewAccessToken } = this.props;

        /** if access token expired */
        if (status === 401) {
          getNewAccessToken();
        }
        /** if refresh token expired   */
        if (status === 400) {
          loginOutAct();
        }
      }
    );

    componentWillUnmount(): void {
      ax.interceptors.request.eject(this.requestInterceptor);
      ax.interceptors.response.eject(this.responseInterceptor);
    }

    render(): JSX.Element {
      // eslint-disable-next-line react/jsx-props-no-spreading,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <WrappedComponent {...this.props} />;
    }
  }
  return ComposedComponent;
};
