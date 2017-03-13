import { createAction } from 'redux-actions';

export const CREATE_QUIZ = 'CREATE_QUIZ';
export const CREATE_QUIZ_SUCCESS = 'CREATE_QUIZ_SUCCESS';
export const CREATE_QUIZ_FAILED = 'CREATE_QUIZ_FAILED';
export const UPDATE_QUIZ = 'UPDATE_QUIZ';
export const UPDATE_QUIZ_SUCCESS = 'UPDATE_QUIZ_SUCCESS';
export const UPDATE_QUIZ_FAILED = 'UPDATE_QUIZ_FAILED';
export const DELETE_QUIZ = 'DELETE_QUIZ';
export const DELETE_QUIZ_SUCCESS = 'DELETE_QUIZ_SUCCESS';

export const createQuiz = createAction(CREATE_QUIZ);
export const createQuizSuccess = createAction(CREATE_QUIZ_SUCCESS);
export const createQuizFailed = createAction(CREATE_QUIZ_FAILED);
export const updateQuiz = createAction(UPDATE_QUIZ);
export const updateQuizSuccess = createAction(UPDATE_QUIZ_SUCCESS);
export const updateQuizFailed = createAction(UPDATE_QUIZ_FAILED);
export const deleteQuiz = createAction(DELETE_QUIZ);
export const deleteQuizSuccess = createAction(DELETE_QUIZ_SUCCESS);
