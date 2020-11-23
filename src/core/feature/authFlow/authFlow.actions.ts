import { Action } from '../../store/action';
import { LoginData } from '../../shared/interfaces/loginData';
import { UserData } from '../../shared/interfaces/UserData';

export enum AuthFlowActions {
  LOGIN = '[auth flow] log in action',
  LOGIN_SUCCESS = '[auth flow] log in action success',
  LOGIN_FAILURE = '[auth flow] log in action failure',
  LOGOUT = '[auth flow] logout action',

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

  constructor(public payload: { data: UserData }) {
    super();
  }
}

export class LoginFailureAct extends Action {
  readonly type = AuthFlowActions.LOGIN_FAILURE;
}

export class RegisterAct extends Action {
  readonly type = AuthFlowActions.REGISTER;

  constructor(public payload: UserData) {
    super();
  }
}

export class LogOutAct extends Action {
  readonly type = AuthFlowActions.LOGOUT;
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

export type AuthFlowActionsTypes =
  | LoginAct
  | LoginSuccessAct
  | LoginFailureAct
  | RegisterAct
  | RegisterSuccessAct
  | RegisterFailureAct
  | LogOutAct
  | GetNewAccessTokenAct;
