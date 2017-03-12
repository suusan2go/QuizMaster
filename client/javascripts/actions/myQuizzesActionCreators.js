import { createAction } from 'redux-actions';

export const FETCH_MY_QUIZZES = 'FETCH_MY_QUIZZES';
export const FETCH_MY_QUIZZES_SUCCESS = 'FETCH_MY_QUIZZES_SUCCESS';
export const CLEAR_MY_QUIZZES = 'CLEAR_MY_QUIZZES';

export const fetchMyQuizzes = createAction(FETCH_MY_QUIZZES);
export const fetchMyQuizzesSuccess = createAction(FETCH_MY_QUIZZES_SUCCESS);
export const clearMyQuizzes = createAction(CLEAR_MY_QUIZZES);
