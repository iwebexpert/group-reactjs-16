import {CHATS_LOAD, CHATS_SEND, CHAT_ADD, CHAT_FIRE, CHAT_UNFIRE, CHAT_REMOVE, MESSAGE_REMOVE} from "actions/chats";
import update from 'react-addons-update';

const chatsData = {
    1: {
        author: 'Петя',
        messages: [],
        updated: false,
    },
    2: {
        author: 'Вася',
        messages: [],
        updated: false,
    },
    3: {
        author: 'Коля',
        messages: [],
        updated: false,
    },
};

const initialState = {
    entries: {},
};

export const chatReducer = (state = initialState, action) => {
    let chat;
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
          const {chatID, chatName} = action.payload;

          return update(state, {
              entries: {$merge: {
                      [chatID]: {author: chatName, messages: []}
                  }
              }
          });
      case CHAT_FIRE:
          chat = state.entries[action.payload];
          chat.updated = true;
          return update(state, {
              entries: {$merge: {
                      [action.payload]: chat
                  }
              }
          });
      case CHAT_UNFIRE:
          chat = state.entries[action.payload];
          chat.updated = false;
          return update(state, {
              entries: {$merge: {
                      [action.payload]: chat
                  }
              }
          });
      case CHAT_REMOVE:
          delete state.entries[action.payload];
          return {
              ...state,
          };
      case MESSAGE_REMOVE:
          const {chatId, messageID} = action.payload;
          return update(state, {
              entries: {[chatId] : {messages: {$splice: [[messageID, 1]]
              }}}
          });
      default:
          return state;
  }
};