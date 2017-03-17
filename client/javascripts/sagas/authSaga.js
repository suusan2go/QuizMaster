import { call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  LOG_OUT,
} from 'actions/authActionCreators';

export function* handleRequestSignOut() {
  try {
    yield call(api.logOut);
    window.location.href = '/';
  } catch (error) {
    // TODO: error handling
  }
}

export default function* diarySaga() {
  yield takeEvery(LOG_OUT, handleRequestSignOut);
}
