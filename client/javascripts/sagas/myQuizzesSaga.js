import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  FETCH_MY_QUIZZES,
  fetchMyQuizzesSuccess,
} from 'actions/myQuizzesActionCreators';

export function* handleFetchQuizzes(action) {
  try {
    const payload = yield call(api.myQuizzes, action.payload);
    yield put(fetchMyQuizzesSuccess(payload));
  } catch (error) {
    // TODO: error handling
  }
}

export default function* myQuizzesSaga() {
  yield takeEvery(FETCH_MY_QUIZZES, handleFetchQuizzes);
}
