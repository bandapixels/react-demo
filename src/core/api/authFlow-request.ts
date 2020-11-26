import { AxiosPromise } from 'axios';
import { ax } from './request';
import { AuthData } from '../shared/interfaces/authData';
import { RegisterData } from '../shared/interfaces/registerData';
import api from '../shared/constant';

export class AuthFlowRequest {
  public sendLoginData = (loginData: AuthData): AxiosPromise => {
    const url = api.schema + api.host + api.login;
    return ax.post(url, loginData);
  };

  public sendRegisterData = (registerData: RegisterData): AxiosPromise => {
    const url = api.schema + api.host + api.registration;
    return ax.post(url, registerData);
  };

  public getNewToken = (refreshToken: string): AxiosPromise => {
    const url = api.schema + api.host + api.newToken;
    return ax.post(url, { token: refreshToken });
  };

  public getName = (): AxiosPromise => {
    const url = api.schema + api.host + api.name;
    return ax.get(url);
  };
}

const instance = new AuthFlowRequest();

export default instance;
