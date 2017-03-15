import { createAction } from 'redux-actions';

export const START_QUIZ_TRIAL = 'START_QUIZ_TRIAL';
export const START_QUIZ_TRIAL_SUCCESS = 'START_QUIZ_TRIAL_SUCCESS';
export const GET_QUIZ_TRIAL = 'GET_QUIZ_TRIAL';
export const GET_QUIZ_TRIAL_SUCCESS = 'GET_QUIZ_TRIAL_SUCCESS';
export const GET_QUIZ_TRIAL_RESULT = 'GET_QUIZ_TRIAL_RESULT';
export const GET_QUIZ_TRIAL_RESULT_SUCCESS = 'GET_QUIZ_TRIAL_RESULT_SUCCESS';
export const SUBMIT_QUIZ_TRIAL_ANSWER = 'SUBMIT_QUIZ_TRIAL_ANSWER';
export const SUBMIT_QUIZ_TRIAL_ANSWER_SUCCESS = 'SUBMIT_QUIZ_TRIAL_ANSWER_SUCCESS';

export const startQuizTrial = createAction(START_QUIZ_TRIAL);
export const startQuizTrialSuccess = createAction(START_QUIZ_TRIAL_SUCCESS);
export const getQuizTrial = createAction(GET_QUIZ_TRIAL);
export const getQuizTrialSuccess = createAction(GET_QUIZ_TRIAL_SUCCESS);
export const getQuizTrialResult = createAction(GET_QUIZ_TRIAL_RESULT);
export const getQuizTrialResultSuccess = createAction(GET_QUIZ_TRIAL_RESULT_SUCCESS);
export const submitQuizTrialAnswer = createAction(SUBMIT_QUIZ_TRIAL_ANSWER);
export const submitQuizTrialAnswerSuccess = createAction(SUBMIT_QUIZ_TRIAL_ANSWER_SUCCESS);
