import { createAction } from 'redux-actions';

export const GET_MY_QUIZ = 'GET_MY_QUIZ';
export const GET_MY_QUIZ_SUCCESS = 'GET_MY_QUIZ_SUCCESS';
export const CLEAR_MY_QUIZ = 'CLEAR_MY_QUIZ';

export const getMyQuiz = createAction(GET_MY_QUIZ);
export const getMyQuizSuccess = createAction(GET_MY_QUIZ_SUCCESS);
export const clearMyQuiz = createAction(CLEAR_MY_QUIZ);
