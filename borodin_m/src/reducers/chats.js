import {CHATS_LOAD, CHATS_SEND, CHAT_ADD} from "actions/chats";
import update from 'react-addons-update';

const chatsData = {
    1: {
        author: 'Петя',
        messages: []
    },
    2: {
        author: 'Вася',
        messages: []
    },
    3: {
        author: 'Коля',
        messages: []
    },
};

const initialState = {
    entries: {},
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
      case CHATS_LOAD:
          return {
              ...state,
              entries: chatsData
          };
      case CHATS_SEND:
          return update(state, {
              entries: {
                  [action.payload.chatID]: {
                      messages: {$push: [{text: action.payload.text, author: action.payload.author}]}
                  }
              }
          });
      case CHAT_ADD:
          const keys = Object.keys(state.entries);
          const lastKey = parseInt(keys[keys.length - 1]);

          return update(state, {
              entries: {
                  [lastKey + 1]: {$set: {author: action.payload, messages: []}}
              }
          });
      default:
          return state;
  }
};