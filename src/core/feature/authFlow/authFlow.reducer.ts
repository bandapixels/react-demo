import { AuthFlowState } from './authFlow.state';
import * as acts from './authFlow.actions';

const initialState: AuthFlowState = {
  user: { name: '' },
  loginResult: '',
  registrationResult: '',
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action: acts.AuthFlowActionsTypes): AuthFlowState {
  switch (action.type) {
    case acts.AuthFlowActions.LOGIN_SUCCESS: {
      const {
        payload: { name },
      } = action as acts.LoginSuccessAct;

      return { ...state, user: { name } };
    }
    default: {
      return { ...state };
    }
  }
}
