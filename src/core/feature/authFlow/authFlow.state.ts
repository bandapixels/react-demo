export interface AuthFlowState {
  user: { name: string };
  isLoggedIn: boolean;
  loginResult: string;
  registrationResult: string;
}
