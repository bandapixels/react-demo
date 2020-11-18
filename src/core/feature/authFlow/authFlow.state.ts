import { UserData } from '../../shared/interfaces/UserData';

export interface AuthFlowState {
  user: UserData;
  isLoggedIn: boolean;
  loginResult: string;
  registrationResult: string;
}
