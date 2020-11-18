import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { AuthFlowState } from '../feature/authFlow/authFlow.state';

export interface AppState {
  auth: AuthFlowState;
}

export default (): Store => {
  // eslint-disable-next-line
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  const initialState = {};

  const middleware = [sagaMiddleware];

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return store;
};
