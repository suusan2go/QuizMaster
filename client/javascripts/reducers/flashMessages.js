import { handleActions } from 'redux-actions';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

const flashMessages = handleActions({
  [flashMessagesActions.ADD_FLASH_MESSAGE]: (state, action) => (
    [
      ...state,
      {
        id: shortid.generate(),
        type: action.payload.type,
        messages: action.payload.messages,
      },
    ]
  ),
  [flashMessagesActions.REMOVE_FLASH_MESSAGE]: (state, action) => {
    const index = findIndex(state, { id: action.payload });
    if (index >= 0) {
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    return state;
  },
  [flashMessagesActions.REMOVE_ALL_FLASH_MESSAGES]: () => [],
}, []);

export default flashMessages;
