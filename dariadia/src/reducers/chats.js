import {
  CHATS_LOAD,
  CHATS_SEND,
  CHAT_ADD,
  CHAT_HIGHLIGHT,
  CHAT_DEHIGHLIGHT,
  CHAT_DELETE,
} from "actions/chats";
import update from "react-addons-update";

const dataBackend = {
  "1": {
    name: "😸 Chat",
    messages: [
      {
        text: "Hi! Share your happy news here",
        author: "Bot",
      },
    ],
    state: { highlight: false },
  },
  "2": {
    name: "🙀 Chat",
    messages: [
      {
        text: "Hi! Share your shocking news here",
        author: "Bot",
      },
    ],
    state: { highlight: false },
  },
  "3": {
    name: "😽 Chat",
    messages: [
      {
        text: "Hi 💋",
        author: "Bot",
      },
    ],
    state: { highlight: false },
  },
};

const initialState = {
  entries: {}, //Chats
  loading: false,
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHATS_LOAD:
      return {
        ...state,
        entries: dataBackend,
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
      console.log(action)
      delete state.entries.action.payload.chatId;
      return {
        ...state,
      }
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
              $set: { highlight: true},
            },
          },
        },
      });
      case CHAT_DEHIGHLIGHT:
        return update(state, {
          entries: {
            [action.payload.chatId]: {
              state: {
                $set: { highlight: false},
              },
            },
          },
        });
    
    default:
      return state;
  }
};
