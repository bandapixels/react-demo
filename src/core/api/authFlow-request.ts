import { AxiosResponse } from 'axios';
import { ax } from './request';
import { LoginData } from '../shared/interfaces/loginData';
import { RegisterData } from '../shared/interfaces/registerData';
import api from '../shared/constant';

export class AuthFlowRequest {
  public sendLoginData = (loginData: LoginData): Promise<AxiosResponse> => {
    const url = api.schema + api.host + api.login;
    return ax.post(url, loginData);
  };

  public sendRegisterData = (registerData: RegisterData): Promise<AxiosResponse> => {
    const url = api.schema + api.host + api.registration;
    return ax.post(url, registerData);
  };

  public getNewToken = (refreshToken: string): Promise<AxiosResponse> => {
    const url = api.schema + api.host + api.login;
    return ax.post(url, {}, { headers: { Authorization: `Bearer ${refreshToken}` } });
  };
}

const instance = new AuthFlowRequest();

export default instance;
