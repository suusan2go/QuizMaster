import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  GET_USER_ANSWER,
  getUserAnswerSuccess,
} from 'actions/userAnswerActionCreators';
import ErrorHandler from './ErrorHandler';

export function* handleFetchQuiz(action) {
  try {
    const payload = yield call(api.userAnswer, action.payload);
    yield put(getUserAnswerSuccess(payload));
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield errorHandler.handleError();
  }
}

export default function* userAnswerSaga() {
  yield takeEvery(GET_USER_ANSWER, handleFetchQuiz);
}
