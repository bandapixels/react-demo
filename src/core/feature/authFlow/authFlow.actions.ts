import { Action } from '../../store/store';
import { LoginData } from '../../shared/interfaces/loginData';
import { UserData } from '../../shared/interfaces/UserData';

export enum AuthFlowActions {
  LOGIN = '[auth flow] log in action',
  LOGIN_SUCCESS = '[auth flow] log in action success',
  LOGIN_FAILURE = '[auth flow] log in action failure',

  REGISTER = '[auth flow] register user',
  REGISTER_SUCCESS = '[auth flow] register user success',
  REGISTER_FAILURE = '[auth flow] register user failure',
}

export class LoginAct extends Action {
  readonly type = AuthFlowActions.LOGIN;

  constructor(public payload: LoginData) {
    super();
  }
}

export class LoginSuccessAct extends Action {
  readonly type = AuthFlowActions.LOGIN_SUCCESS;

  constructor(public payload: UserData) {
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

export class RegisterSuccessAct extends Action {
  readonly type = AuthFlowActions.REGISTER_SUCCESS;
}

export class RegisterFailureAct extends Action {
  readonly type = AuthFlowActions.REGISTER_FAILURE;
}

export type AuthFlowActionsTypes =
  | LoginAct
  | LoginSuccessAct
  | LoginFailureAct
  | RegisterAct
  | RegisterSuccessAct
  | RegisterFailureAct;
