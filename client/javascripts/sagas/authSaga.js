import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  LOG_OUT,
} from 'actions/authActionCreators';
import ErrorHandler from './ErrorHandler';

export function* handleRequestSignOut() {
  try {
    yield call(api.logOut);
    window.location.href = '/';
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield errorHandler.handleError();
  }
}

export default function* diarySaga() {
  yield takeEvery(LOG_OUT, handleRequestSignOut);
}
