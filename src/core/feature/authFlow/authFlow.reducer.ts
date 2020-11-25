import { AuthFlowState } from './authFlow.state';
import * as acts from './authFlow.actions';
import { SetLoggedInState } from './authFlow.actions';

const initialState: AuthFlowState = {
  user: { name: '' },
  loginResult: '',
  registrationResult: '',
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action: acts.AuthFlowActionsTypes): AuthFlowState {
  switch (action.type) {
    case acts.AuthFlowActions.LOGIN_SUCCESS: {
      return { ...state, isLoggedIn: true };
    }
    case acts.AuthFlowActions.Set_LOGGED_IN_STATE: {
      const { payload } = action as SetLoggedInState;
      return { ...state, isLoggedIn: payload };
    }
    case acts.AuthFlowActions.GET_NAME_SUCCESS: {
      const { payload } = action as acts.GetNameSuccessAct;

      return { ...state, user: { name: payload } };
    }
    default: {
      return { ...state };
    }
  }
}
