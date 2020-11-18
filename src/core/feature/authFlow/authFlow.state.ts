import { UserData } from '../../shared/interfaces/UserData';

export interface AuthFlowState {
  user: UserData;
  loginResult: string;
  registrationResult: string;
}
