import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  GET_MY_QUIZZES,
  getMyQuizzesSuccess,
} from 'actions/myQuizzesActionCreators';
import ErrorHandler from './ErrorHandler';

export function* handleFetchQuizzes(action) {
  try {
    const payload = yield call(api.myQuizzes, action.payload);
    yield put(getMyQuizzesSuccess(payload));
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield errorHandler.handleError();
  }
}

export default function* myQuizzesSaga() {
  yield takeEvery(GET_MY_QUIZZES, handleFetchQuizzes);
}
