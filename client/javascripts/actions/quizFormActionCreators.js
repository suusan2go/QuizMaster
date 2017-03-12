import { createAction } from 'redux-actions';

// TODO: fix naming. CREATE or UPDATE is better i think...
export const CREATE_QUIZ = 'CREATE_QUIZ';
export const CREATE_QUIZ_SUCCESS = 'CREATE_QUIZ_SUCCESS';
export const CREATE_QUIZ_FAILED = 'CREATE_QUIZ_FAILED';
export const UPDATE_QUIZ = 'UPDATE_QUIZ';
export const UPDATE_QUIZ_SUCCESS = 'UPDATE_QUIZ_SUCCESS';
export const UPDATE_QUIZ_FAILED = 'UPDATE_QUIZ_FAILED';

export const createQuiz = createAction(CREATE_QUIZ);
export const createQuizSuccess = createAction(CREATE_QUIZ_SUCCESS);
export const createQuizFailed = createAction(CREATE_QUIZ_FAILED);
export const updateQuiz = createAction(UPDATE_QUIZ);
export const updateQuizSuccess = createAction(UPDATE_QUIZ_SUCCESS);
export const updateQuizFailed = createAction(UPDATE_QUIZ_FAILED);
