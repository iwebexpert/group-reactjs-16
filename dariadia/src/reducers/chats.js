import {
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_LOAD_FAILURE,
  CHATS_SEND,
  CHAT_ADD,
  CHAT_HIGHLIGHT,
  CHAT_DEHIGHLIGHT,
  CHAT_DELETE,
} from "actions/chats";
import update from "react-addons-update";

const initialState = {
  entries: {}, //Chats
  loading: false,
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHATS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload,
      };
    case CHATS_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CHAT_ADD:
      const { name, chatId } = action.payload;
      return update(state, {
        entries: {
          $merge: {
            [chatId]: {
              messages: [{ text: "Hello there", author: "Bot" }],
              name,
              state: { highlight: false },
            },
          },
        },
      });
    case CHAT_DELETE:
      const chatToDelete = action.payload.chatId;
      delete state.entries[chatToDelete];
      return {
        ...state,
        entries: { ...state.entries },
      };
    case CHATS_SEND:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            messages: {
              $push: [
                { text: action.payload.text, author: action.payload.author },
              ],
            },
          },
        },
      });
    case CHAT_HIGHLIGHT:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            state: {
              $set: { highlight: true },
            },
          },
        },
      });
    case CHAT_DEHIGHLIGHT:
      return update(state, {
        entries: {
          [action.payload.chatId]: {
            state: {
              $set: { highlight: false },
            },
          },
        },
      });

    default:
      return state;
  }
};
