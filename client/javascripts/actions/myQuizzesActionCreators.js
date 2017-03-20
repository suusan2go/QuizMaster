import { createAction } from 'redux-actions';

export const GET_MY_QUIZZES = 'GET_MY_QUIZZES';
export const GET_MY_QUIZZES_SUCCESS = 'GET_MY_QUIZZES_SUCCESS';

export const getMyQuizzes = createAction(GET_MY_QUIZZES);
export const getMyQuizzesSuccess = createAction(GET_MY_QUIZZES_SUCCESS);
