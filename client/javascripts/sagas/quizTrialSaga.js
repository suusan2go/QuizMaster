import { call, takeLatest, takeEvery, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit, reset } from 'redux-form';
import * as api from 'api';
import {
  START_QUIZ_TRIAL,
  GET_QUIZ_TRIAL,
  GET_QUIZ_TRIAL_RESULT,
  SUBMIT_QUIZ_TRIAL_ANSWER,
  getQuizTrialSuccess,
  getQuizTrialResultSuccess,
} from 'actions/quizTrialActionCreators';
import {
  addWarningFlashMessage,
  removeAllFlashMessages,
} from 'actions/flashMessagesActionCreators';
import { browserHistory } from 'react-router';
import ErrorHandler from './ErrorHandler';

export function* handleStartQuizTrial(action) {
  try {
    const payload = yield call(api.startQuizTrial, action.payload);
    browserHistory.push(`/quiz_trials/${payload.id}`);
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield errorHandler.handleError();
  }
}

export function* handleGetQuizTrial(action) {
  try {
    const payload = yield call(api.getQuizTrial, action.payload);
    if (payload.next_question === null) {
      browserHistory.push(`/quiz_trials/${payload.id}/result`);
    } else {
      yield put(getQuizTrialSuccess(payload));
    }
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield errorHandler.handleError();
  }
}

export function* handleGetQuizTrialResult(action) {
  try {
    const payload = yield call(api.quizTrialResult, action.payload);
    yield put(getQuizTrialResultSuccess(payload));
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    yield errorHandler.handleError();
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
    yield put(reset('quizTrialAnswerForm'));
    browserHistory.push(`/user_answers/${payload.id}`);
  } catch (error) {
    yield put(removeAllFlashMessages());
    if (error.response && error.response.data.validation_errors) {
      yield put(addWarningFlashMessage('Submission Failed'));
      yield put(stopSubmit('quizTrialAnswerForm', error.response.data.validation_errors));
    } else {
      const errorHandler = new ErrorHandler(error);
      yield errorHandler.handleError();
    }
  }
}

export default function* myQuizzesSaga() {
  yield [
    takeLatest(START_QUIZ_TRIAL, handleStartQuizTrial),
    takeEvery(GET_QUIZ_TRIAL, handleGetQuizTrial),
    takeEvery(GET_QUIZ_TRIAL_RESULT, handleGetQuizTrialResult),
    takeLatest(SUBMIT_QUIZ_TRIAL_ANSWER, handleSubmitQuizTrialAnswer),
  ];
}
