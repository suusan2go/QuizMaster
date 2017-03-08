// @flow
import { createAction } from 'redux-actions';

export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';
export const REMOVE_ALL_FLASH_MESSAGES = 'REMOVE_ALL_FLASH_MESSAGES';

export const addInfoFlashMessage = createAction(
  ADD_FLASH_MESSAGE, messages => ({ type: 'info', messages }),
);
export const addSuccessFlashMessage = createAction(
  ADD_FLASH_MESSAGE, messages => ({ type: 'success', messages }),
);
export const addWarningFlashMessage = createAction(
  ADD_FLASH_MESSAGE, messages => ({ type: 'warning', messages }),
);
export const removeFlashMessage = createAction(REMOVE_FLASH_MESSAGE);
export const removeAllFlashMessages = createAction(REMOVE_ALL_FLASH_MESSAGES);
