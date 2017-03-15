import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  GET_USER_ANSWER,
  getUserAnswerSuccess,
} from 'actions/userAnswerActionCreators';

export function* handleFetchQuiz(action) {
  try {
    const payload = yield call(api.userAnswer, action.payload);
    yield put(getUserAnswerSuccess(payload));
  } catch (error) {
    // TODO: error handling
  }
}

export default function* userAnswerSaga() {
  yield takeEvery(GET_USER_ANSWER, handleFetchQuiz);
}
