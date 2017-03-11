import { createAction } from 'redux-actions';

export const POST_QUIZ = 'POST_QUIZ';
export const POST_QUIZ_SUCCESS = 'POST_QUIZ_SUCCESS';
export const POST_QUIZ_FAILED = 'POST_QUIZ_FAILED';
export const CLEAR_QUIZ = 'CLEAR_QUIZ';

export const postQuiz = createAction(POST_QUIZ);
export const postQuizSuccess = createAction(POST_QUIZ_SUCCESS);
export const postQuizFailed = createAction(POST_QUIZ_FAILED);
export const clearQuiz = createAction(CLEAR_QUIZ);
