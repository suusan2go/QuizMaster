import { createAction } from 'redux-actions';

export const FETCH_MY_QUIZ = 'FETCH_MY_QUIZ';
export const FETCH_MY_QUIZ_SUCCESS = 'FETCH_MY_QUIZ_SUCCESS';
export const CLEAR_MY_QUIZ = 'CLEAR_MY_QUIZ';

export const fetchmyQuiz = createAction(FETCH_MY_QUIZ);
export const fetchmyQuizSuccess = createAction(FETCH_MY_QUIZ_SUCCESS);
export const clearmyQuiz = createAction(CLEAR_MY_QUIZ);
