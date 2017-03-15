import { call, takeLatest } from 'redux-saga/effects';
import * as api from 'api';
import {
  START_QUIZ_TRIAL,
} from 'actions/quizTrialActionCreators';
import { browserHistory } from 'react-router';

export function* handleStartQuizTrial(action) {
  try {
    const payload = yield call(api.startQuizTrial, action.payload);
    browserHistory.push(`/quiz_trials/${payload.id}`);
  } catch (error) {
    // TODO: error handling
  }
}

export default function* myQuizzesSaga() {
  yield takeLatest(START_QUIZ_TRIAL, handleStartQuizTrial);
}
