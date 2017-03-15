import { createAction } from 'redux-actions';

export const START_QUIZ_TRIAL = 'START_QUIZ_TRIAL';
export const START_QUIZ_TRIAL_SUCCESS = 'START_QUIZ_TRIAL_SUCCESS';

export const startQuizTrial = createAction(START_QUIZ_TRIAL);
export const startQuizTrialSuccess = createAction(START_QUIZ_TRIAL_SUCCESS);
