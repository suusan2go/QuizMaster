import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  FETCH_MY_QUIZ,
  fetchMyQuizSuccess,
} from 'actions/myQuizActionCreators';

export function* handleFetchQuiz(action) {
  try {
    const payload = yield call(api.myQuiz, action.payload);
    yield put(fetchMyQuizSuccess(payload));
  } catch (error) {
    // TODO: error handling
  }
}

export default function* myQuizSaga() {
  yield takeEvery(FETCH_MY_QUIZ, handleFetchQuiz);
}
