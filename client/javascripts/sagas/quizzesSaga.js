import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  GET_QUIZZES,
  getQuizzesSuccess,
} from 'actions/quizzesActionCreators';
import ErrorHandler from './ErrorHandler';

export function* handleFetchQuizzes() {
  try {
    const payload = yield call(api.quizzes);
    yield put(getQuizzesSuccess(payload));
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield errorHandler.handleError();
  }
}

export default function* myQuizzesSaga() {
  yield takeEvery(GET_QUIZZES, handleFetchQuizzes);
}
