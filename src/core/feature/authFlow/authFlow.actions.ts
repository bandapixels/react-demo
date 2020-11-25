import { Action } from '../../store/action';
import { LoginData } from '../../shared/interfaces/loginData';
import { RegisterData } from '../../shared/interfaces/registerData';

export enum AuthFlowActions {
  LOGIN = '[auth flow] log in action',
  LOGIN_SUCCESS = '[auth flow] log in action success',
  LOGIN_FAILURE = '[auth flow] log in action failure',

  LOGOUT = '[auth flow] logout action',
  LOGOUT_SUCCESS = '[auth flow] logout action success',
  LOGOUT_FAILURE = '[auth flow] logout action failure',

  REGISTER = '[auth flow] register user',
  REGISTER_SUCCESS = '[auth flow] register user success',
  REGISTER_FAILURE = '[auth flow] register user failure',

  GET_ACCESS_TOKEN_VIA_REFRESH_TOKEN = '[auth flow] get access token via refresh token',
  GET_ACCESS_TOKEN_VIA_REFRESH_TOKEN_SUCCESS = '[auth flow] get access token via refresh token sucess',
  GET_ACCESS_TOKEN_VIA_REFRESH_TOKEN_FAILURE = '[auth flow] get access token via refresh token failure',
}

export class LoginAct extends Action {
  readonly type = AuthFlowActions.LOGIN;

  constructor(public payload: LoginData) {
    super();
  }
}

export class LoginSuccessAct extends Action {
  readonly type = AuthFlowActions.LOGIN_SUCCESS;

  constructor(public payload: { name: string }) {
    super();
  }
}

export class LoginFailureAct extends Action {
  readonly type = AuthFlowActions.LOGIN_FAILURE;
}

export class RegisterAct extends Action {
  readonly type = AuthFlowActions.REGISTER;

  constructor(public payload: RegisterData) {
    super();
  }
}

export class LogoutAct extends Action {
  readonly type = AuthFlowActions.LOGOUT;
}

export class LogoutSuccessAct extends Action {
  readonly type = AuthFlowActions.LOGOUT_SUCCESS;
}
export class LogoutFailureAct extends Action {
  readonly type = AuthFlowActions.LOGOUT_FAILURE;
}

export class RegisterSuccessAct extends Action {
  readonly type = AuthFlowActions.REGISTER_SUCCESS;
}

export class RegisterFailureAct extends Action {
  readonly type = AuthFlowActions.REGISTER_FAILURE;
}

export class GetNewAccessTokenAct extends Action {
  readonly type = AuthFlowActions.GET_ACCESS_TOKEN_VIA_REFRESH_TOKEN;
}

export class GetNewAccessTokenSuccessAct extends Action {
  readonly type = AuthFlowActions.GET_ACCESS_TOKEN_VIA_REFRESH_TOKEN;
}

export class GetNewAccessTokenFailureAct extends Action {
  readonly type = AuthFlowActions.GET_ACCESS_TOKEN_VIA_REFRESH_TOKEN;
}

export type AuthFlowActionsTypes =
  | LoginAct
  | LoginSuccessAct
  | LoginFailureAct
  | RegisterAct
  | RegisterSuccessAct
  | RegisterFailureAct
  | LogoutAct
  | GetNewAccessTokenAct;
