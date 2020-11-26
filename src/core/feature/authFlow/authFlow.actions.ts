import { Action } from '../../store/action';
import { AuthData } from '../../shared/interfaces/authData';
import { RegisterData } from '../../shared/interfaces/registerData';

export enum AuthFlowActions {
  LOGIN = '[auth flow] log in action',
  LOGIN_SUCCESS = '[auth flow] log in action success',
  LOGIN_FAILURE = '[auth flow] log in action failure',

  SET_LOGGED_IN_STATE = '[auth flow] set logged in state',

  LOGOUT = '[auth flow] logout action',
  LOGOUT_SUCCESS = '[auth flow] logout action success',
  LOGOUT_FAILURE = '[auth flow] logout action failure',

  REGISTER = '[auth flow] register user',
  REGISTER_SUCCESS = '[auth flow] register user success',
  REGISTER_FAILURE = '[auth flow] register user failure',

  GET_NAME = '[auth flow] get name',
  GET_NAME_SUCCESS = '[auth flow] get name success',
  GET_NAME_FAILURE = '[auth flow] get name failure',
}

export class LoginAct extends Action {
  readonly type = AuthFlowActions.LOGIN;

  constructor(public payload: AuthData) {
    super();
  }
}

export class LoginSuccessAct extends Action {
  readonly type = AuthFlowActions.LOGIN_SUCCESS;
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

export class GetNameAct extends Action {
  readonly type = AuthFlowActions.GET_NAME;
}

export class GetNameSuccessAct extends Action {
  readonly type = AuthFlowActions.GET_NAME_SUCCESS;

  constructor(public payload: string) {
    super();
  }
}

export class GetNameFailureAct extends Action {
  readonly type = AuthFlowActions.GET_NAME_FAILURE;
}

export class SetLoggedInState extends Action {
  readonly type = AuthFlowActions.SET_LOGGED_IN_STATE;

  constructor(public payload: boolean) {
    super();
  }
}

export type AuthFlowActionsTypes =
  | LoginAct
  | LoginSuccessAct
  | LoginFailureAct
  | RegisterAct
  | RegisterSuccessAct
  | RegisterFailureAct
  | LogoutAct
  | GetNameAct
  | GetNameSuccessAct
  | GetNameFailureAct
  | SetLoggedInState;
