import { AuthFlowState } from './authFlow.state';
import * as acts from './authFlow.actions';

const initialState: AuthFlowState = {
  user: { loginName: '' },
  loginResult: '',
  registrationResult: '',
  isLoggedIn: false,
};

export default function (state = initialState, action: acts.AuthFlowActionsTypes): AuthFlowState {
  switch (action.type) {
    case acts.AuthFlowActions.LOGIN_SUCCESS: {
      const { payload: user } = action as acts.LoginSuccessAct;

      return { ...state, user };
    }
    default: {
      return { ...state };
    }
  }
}
