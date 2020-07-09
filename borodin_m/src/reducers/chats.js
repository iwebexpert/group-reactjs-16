import {
    CHATS_LOAD,
    CHATS_SEND,
    CHAT_ADD,
    CHAT_FIRE,
    CHAT_UNFIRE,
    CHAT_REMOVE,
    MESSAGE_REMOVE,
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILURE,
    CHATS_SEND_REQUEST,
    CHATS_SEND_SUCCESS,
    CHATS_SEND_FAILURE
} from "actions/chats";
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
    loading: false,
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
      case CHATS_SEND_REQUEST:
          return {
              ...state,
              loading: true
          };
      case CHATS_SEND_SUCCESS:
          let {_id, message} = action.payload;
          const id = state.entries.findIndex((chat) => {
              return chat._id === _id;
          });

          return update(state, {
              entries: {
                  [id]: {
                      messages: {$push: [message]}
                  }
              },
              loading: {$set: false}
          });
      case CHATS_SEND_FAILURE:
          return {
              ...state,
              loading: false
          };
      case CHATS_LOAD_REQUEST:
          return {
              ...state,
              loading: true
          };
      case CHATS_LOAD_SUCCESS:
          return {
              ...state,
              entries: action.payload,
              loading: false
          };
      case CHATS_LOAD_FAILURE:
          return {
              ...state,
              loading: false
          };
      default:
          return state;
  }
};