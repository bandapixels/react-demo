import { all, call, fork, put, take } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import * as authFlowActs from './authFlow.actions';
import AuthFlowRequest from '../../api/authFlow-request';

function* watchGetLogin(): SagaIterator {
  while (true) {
    const { payload } = yield take(authFlowActs.AuthFlowActions.LOGIN);
    try {
      const { data } = yield call(AuthFlowRequest.sendLoginData, payload);
      yield put(new authFlowActs.LoginSuccessAct({ data }));
    } catch (e) {
      yield put(new authFlowActs.LoginFailureAct());
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchGetLogin)]);
}
