import { createAction } from 'redux-actions';

export const CREATE_QUESTION = 'CREATE_QUESTION';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAILED = 'CREATE_QUESTION_FAILED';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS';
export const UPDATE_QUESTION_FAILED = 'UPDATE_QUESTION_FAILED';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';

export const createQuestion = createAction(CREATE_QUESTION);
export const createQuestionSuccess = createAction(CREATE_QUESTION_SUCCESS);
export const createQuestionFailed = createAction(CREATE_QUESTION_FAILED);
export const updateQuestion = createAction(UPDATE_QUESTION);
export const updateQuestionSuccess = createAction(UPDATE_QUESTION_SUCCESS);
export const updateQuestionFailed = createAction(UPDATE_QUESTION_FAILED);
export const deleteQuestion = createAction(DELETE_QUESTION);
export const deleteQuestionSuccess = createAction(DELETE_QUESTION_SUCCESS);
