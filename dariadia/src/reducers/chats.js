import { CHATS_LOAD, CHATS_SEND, CHAT_ADD } from "actions/chats";
import update from "react-addons-update";

import { v4 as uuidv4 } from "uuid";

const dataBackend = {
  [uuidv4()]: {
    name: "😸 Chat",
    messages: [
      {
        text: "Hi! Share your happy news here",
        author: "Bot",
      },
    ],
  },
  [uuidv4()]: {
    name: "🙀 Chat",
    messages: [
      {
        text: "Hi! Share your shocking news here",
        author: "Bot",
      },
    ],
  },
  [uuidv4()]: {
    name: "😽 Chat",
    messages: [
      {
        text: "Hi 💋",
        author: "Bot",
      },
    ],
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
      return {
        ...state,
        entries: {
          ...state.entries,
          [uuidv4()]: {
            name: action.payload.chatname,
            messages: [
              {
                text: "Hey there!",
                author: "Bot",
              },
            ],
          },
        },
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
    default:
      return state;
  }
};
