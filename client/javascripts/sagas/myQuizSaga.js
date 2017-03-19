import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  FETCH_MY_QUIZ,
  fetchMyQuizSuccess,
} from 'actions/myQuizActionCreators';
import ErrorHandler from './ErrorHandler';

export function* handleFetchQuiz(action) {
  try {
    const payload = yield call(api.myQuiz, action.payload);
    yield put(fetchMyQuizSuccess(payload));
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield put(errorHandler());
  }
}

export default function* myQuizSaga() {
  yield takeEvery(FETCH_MY_QUIZ, handleFetchQuiz);
}
