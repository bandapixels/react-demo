import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { AuthFlowState } from '../feature/authFlow/authFlow.state';

export interface AppState {
  auth: AuthFlowState;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const actionTransform = () => (next) => (action) => {
  const act = action.toJSON ? action.toJSON() : action;
  return next(act);
};

// eslint-disable-next-line
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const middleware = [sagaMiddleware, actionTransform];

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
