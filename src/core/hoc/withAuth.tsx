import React, { Component, ReactElement, ReactNode } from 'react';
import { Action } from 'redux';
import { ax } from '../api/request';
import AuthFlowRequest from '../api/authFlow-request';

interface ComposedComponentProps {
  LogoutAct: () => Action;
}

const getRefreshToken = async (token: string): Promise<string> => {
  const { data } = await AuthFlowRequest.getNewToken(token);
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  return data.accessToken;
};

export const withAuth = (WrappedComponent: ReactElement<JSX.Element>): ReactNode => {
  class ComposedComponent extends Component<ComposedComponentProps> {
    requestInterceptor = ax.interceptors.request.use((req) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    responseInterceptor = ax.interceptors.response.use(
      (res) => res,
      async (error) => {
        const { status } = error;
        const { LogoutAct } = this.props;

        /** if access token expired */
        if (status === 401) {
          const refreshToken = localStorage.getItem('refreshToken');
          if (!refreshToken) {
            LogoutAct();
          }
          const result = await getRefreshToken(refreshToken as string);

          // eslint-disable-next-line no-console
          console.log(result);
        }
        /** if refresh token expired   */
        if (status === 400) {
          LogoutAct();
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
