import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  GET_QUIZZES,
  getQuizzesSuccess,
} from 'actions/quizzesActionCreators';

export function* handleFetchQuizzes() {
  try {
    const payload = yield call(api.quizzes);
    yield put(getQuizzesSuccess(payload));
  } catch (error) {
    // TODO: error handling
  }
}

export default function* myQuizzesSaga() {
  yield takeEvery(GET_QUIZZES, handleFetchQuizzes);
}
