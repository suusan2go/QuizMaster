import { call, takeLatest, takeEvery, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit, reset } from 'redux-form';
import * as api from 'api';
import {
  START_QUIZ_TRIAL,
  GET_QUIZ_TRIAL,
  SUBMIT_QUIZ_TRIAL_ANSWER,
  getQuizTrialSuccess,
  submitQuizTrialAnswerSuccess,
} from 'actions/quizTrialActionCreators';
import {
  addWarningFlashMessage,
  removeAllFlashMessages,
} from 'actions/flashMessagesActionCreators';
import { browserHistory } from 'react-router';

export function* handleStartQuizTrial(action) {
  try {
    const payload = yield call(api.startQuizTrial, action.payload);
    browserHistory.push(`/quiz_trials/${payload.id}`);
  } catch (error) {
    // TODO: error handling
  }
}

export function* handleGetQuizTrial(action) {
  try {
    const payload = yield call(api.getQuizTrial, action.payload);
    yield put(getQuizTrialSuccess(payload));
  } catch (error) {
    // TODO: error handling
  }
}

export function* handleSubmitQuizTrialAnswer(action) {
  try {
    yield put(startSubmit('quizTrialAnswerForm'));
    const payload = yield call(
      api.submitQuizTrialAnswer,
      action.payload.quizTrialId,
      action.payload.values,
    );
    yield put(submitQuizTrialAnswerSuccess(payload));
    yield put(reset('quizTrialAnswerForm'));
  } catch (error) {
    yield console.log(error);
    yield put(removeAllFlashMessages());
    if (error.response && error.response.data.validationErrors) {
      yield put(addWarningFlashMessage('Submission Failed'));
      yield put(stopSubmit('quizTrialAnswerForm', error.response.data.validationErrors));
    }
  }
}

export default function* myQuizzesSaga() {
  yield [
    takeLatest(START_QUIZ_TRIAL, handleStartQuizTrial),
    takeEvery(GET_QUIZ_TRIAL, handleGetQuizTrial),
    takeLatest(SUBMIT_QUIZ_TRIAL_ANSWER, handleSubmitQuizTrialAnswer),
  ];
}
