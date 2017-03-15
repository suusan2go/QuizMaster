import { createAction } from 'redux-actions';

export const GET_USER_ANSWER = 'GET_USER_ANSWER';
export const GET_USER_ANSWER_SUCCESS = 'GET_USER_ANSWER_SUCCESS';

export const getUserAnswer = createAction(GET_USER_ANSWER);
export const getUserAnswerSuccess = createAction(GET_USER_ANSWER_SUCCESS);
