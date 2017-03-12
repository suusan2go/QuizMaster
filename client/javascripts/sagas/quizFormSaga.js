import { put, call, takeEvery } from 'redux-saga/effects';
import { startSubmit, stopSubmit, reset, SubmissionError } from 'redux-form';
import * as api from 'api';
import {
  POST_QUIZ,
  postQuizSuccess,
  postQuizFailed,
  clearQuiz,
} from 'actions/quizFormActionCreators';
import {
  addWarningFlashMessage,
  addSuccessFlashMessage,
  removeAllFlashMessages,
} from 'actions/flashMessagesActionCreators';
import { browserHistory } from 'react-router';

export function* handlePostQuiz(action) {
  try {
    yield put(startSubmit('quizForm'));
    const payload = yield call(api.createQuiz, action.payload);
    yield put(postQuizSuccess(payload));
    yield put(removeAllFlashMessages());
    yield put(addSuccessFlashMessage('Submission Succeeded'));
    yield put(reset('quizForm'));
    browserHistory.push(`/user/quizzes/${payload.id}`);
  } catch (error) {
    yield put(postQuizFailed(error));
    yield put(removeAllFlashMessages());
    if (error.response.data.validationErrors) {
      yield put(addWarningFlashMessage('Submission Failed'));
      yield put(stopSubmit('quizForm', error.response.data.validationErrors));
    }
  }
}

export default function* diarySaga() {
  yield takeEvery(POST_QUIZ, handlePostQuiz);
}
