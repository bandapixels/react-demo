import { all, fork } from 'redux-saga/effects';
import authSaga from '../feature/authFlow/authFlow.saga';

export default function* rootSaga(): Generator {
  yield all([fork(authSaga)]);
}
