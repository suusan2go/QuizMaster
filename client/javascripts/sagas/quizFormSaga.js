import { put, call, takeEvery } from 'redux-saga/effects';
import { startSubmit, stopSubmit, reset } from 'redux-form';
import * as api from 'api';
import {
  CREATE_QUIZ,
  UPDATE_QUIZ,
  DELETE_QUIZ,
  createQuizSuccess,
  createQuizFailed,
  updateQuizSuccess,
  updateQuizFailed,
  deleteQuizSuccess,
} from 'actions/quizFormActionCreators';
import {
  addWarningFlashMessage,
  addSuccessFlashMessage,
  removeAllFlashMessages,
} from 'actions/flashMessagesActionCreators';
import { browserHistory } from 'react-router';

export function* handleCreateQuiz(action) {
  try {
    yield put(startSubmit('quizForm'));
    const payload = yield call(api.createQuiz, action.payload);
    yield put(createQuizSuccess(payload));
    yield put(removeAllFlashMessages());
    yield put(addSuccessFlashMessage('Submission Succeeded'));
    yield put(reset('quizForm'));
    browserHistory.push(`/user/quizzes/${payload.id}`);
  } catch (error) {
    yield put(createQuizFailed(error));
    yield put(removeAllFlashMessages());
    if (error.response.data.validationErrors) {
      yield put(addWarningFlashMessage('Submission Failed'));
      yield put(stopSubmit('quizForm', error.response.data.validationErrors));
    }
  }
}

export function* handleUpdateQuiz(action) {
  try {
    yield put(startSubmit('quizForm'));
    const payload = yield call(api.updateQuiz, action.payload.quizId, action.payload.values);
    yield put(updateQuizSuccess(payload));
    yield put(removeAllFlashMessages());
    yield put(addSuccessFlashMessage('Submission Succeeded'));
    yield put(reset('quizForm'));
    browserHistory.goBack();
  } catch (error) {
    yield put(updateQuizFailed(error));
    yield put(removeAllFlashMessages());
    if (error.response.data.validationErrors) {
      yield put(addWarningFlashMessage('Submission Failed'));
      yield put(stopSubmit('quizForm', error.response.data.validationErrors));
    }
  }
}

export function* handleDeleteQuiz(action) {
  try {
    yield call(api.deleteQuiz, action.payload);
    yield put(deleteQuizSuccess(action.payload));
    yield put(addSuccessFlashMessage('Deleted'));
    browserHistory.push('/user/quizzes');
  } catch (error) {
    // TODO: Error handling
  }
}

export default function* diarySaga() {
  yield [
    takeEvery(CREATE_QUIZ, handleCreateQuiz),
    takeEvery(UPDATE_QUIZ, handleUpdateQuiz),
    takeEvery(DELETE_QUIZ, handleDeleteQuiz),
  ];
}
