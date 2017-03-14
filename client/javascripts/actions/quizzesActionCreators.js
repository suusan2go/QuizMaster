import { createAction } from 'redux-actions';

export const GET_QUIZZES = 'GET_QUIZZES';
export const GET_QUIZZES_SUCCESS = 'GET_QUIZZES_SUCCESS';

export const getQuizzes = createAction(GET_QUIZZES);
export const getQuizzesSuccess = createAction(GET_QUIZZES_SUCCESS);
