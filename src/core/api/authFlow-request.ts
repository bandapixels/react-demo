import { AxiosResponse } from 'axios';
import { ax } from './request';
import { LoginData } from '../shared/interfaces/loginData';

export class AuthFlowRequest {
  public sendLoginData = (loginData: LoginData): Promise<AxiosResponse> => {
    return ax.post('', loginData);
  };
}

const instance = new AuthFlowRequest();

export default instance;
