import { combineReducers } from 'redux';
import authFlowReducer from '../feature/authFlow/authFlow.reducer';

export default combineReducers({
  auth: authFlowReducer,
});
