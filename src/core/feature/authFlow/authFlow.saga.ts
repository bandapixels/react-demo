import { all, call, fork, put, take } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import * as authFlowActs from './authFlow.actions';
import AuthFlowRequest from '../../api/authFlow-request';
import history from '../../../history';

function* watchGetLogin(): SagaIterator {
  while (true) {
    const { payload } = yield take(authFlowActs.AuthFlowActions.LOGIN);
    try {
      const { data } = yield call(AuthFlowRequest.sendLoginData, payload);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      yield put(new authFlowActs.LoginSuccessAct());
      yield call(history.push, '/');
    } catch (e) {
      yield put(new authFlowActs.LoginFailureAct());
    }
  }
}

function* getName(): SagaIterator {
  while (true) {
    try {
      yield take(authFlowActs.AuthFlowActions.GET_NAME);
      const { data } = yield call(AuthFlowRequest.getName);
      yield put(new authFlowActs.GetNameSuccessAct(data.name));
    } catch (e) {
      yield put(new authFlowActs.GetNameFailureAct());
    }
  }
}

function* watchLogout(): SagaIterator {
  while (true) {
    try {
      yield take(authFlowActs.AuthFlowActions.LOGOUT);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      yield put(new authFlowActs.LogoutSuccessAct());
      history.push('/login');
    } catch (e) {
      yield put(new authFlowActs.LogoutFailureAct());
    }
  }
}

function* watchGetRegistration(): SagaIterator {
  while (true) {
    const { payload } = yield take(authFlowActs.AuthFlowActions.REGISTER);
    try {
      yield call(AuthFlowRequest.sendRegisterData, payload);
      yield put(new authFlowActs.RegisterSuccessAct());
      yield call(history.push, '/login');
    } catch (e) {
      yield put(new authFlowActs.RegisterFailureAct());
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchGetLogin), fork(watchLogout), fork(watchGetRegistration), fork(getName)]);
}
