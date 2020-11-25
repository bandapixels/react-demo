import React, { Component, ReactElement, ReactNode } from 'react';
import { Action } from 'redux';
import { ax } from '../api/request';
import AuthFlowRequest from '../api/authFlow-request';
import api from '../shared/constant';

interface ComposedComponentProps {
  LogoutAct: () => Action;
}

const getRefreshToken = async (token: string): Promise<{ [key: string]: string }> => {
  const { data } = await AuthFlowRequest.getNewToken(token);
  return data;
};

export const withAuth = (WrappedComponent: ReactElement<JSX.Element>): ReactNode => {
  class ComposedComponent extends Component<ComposedComponentProps> {
    requestInterceptor = ax.interceptors.request.use((req) => {
      const token = localStorage.getItem('accessToken');
      if (token && !req.headers.Authorization) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    responseInterceptor = ax.interceptors.response.use(
      (res) => res,
      async (error) => {
        const {
          request: { status },
        } = error;
        const { LogoutAct } = this.props;

        /** if access token expired */
        if (status === 401 && error.config.url !== `${api.schema + api.host}/refresh-token`) {
          const refreshToken = localStorage.getItem('refreshToken');
          if (!refreshToken) {
            LogoutAct();
          }
          const result = await getRefreshToken(refreshToken as string);
          if (result) {
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('refreshToken', result.refreshToken);
            delete error.config.headers.Authorization;
            return ax(error.config);
          }
        }

        /** if refresh token expired   */
        LogoutAct();
        return Promise.reject(error);
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
