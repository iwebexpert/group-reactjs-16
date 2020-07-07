import { combineNestedState } from "../helpers";
import {
  TOGGLE_NOTIFY,
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_LOAD_ERROR,
  CHATS_CREATE_SUCCESS,
  CHATS_CREATE_ERROR,
  CHATS_DELETE_SUCCESS,
  CHATS_DELETE_ERROR,
  CHATS_ADD_MESSAGE_ERROR,
  CHATS_ADD_MESSAGE_SUCCESS,
  CHATS_DELETE_MESSAGE_ERROR,
  CHATS_DELETE_MESSAGE_SUCCESS
} from "actions/chat";

const chatInitialState = {
  entries: {},
  isFetching: false
};

export function chatReducer( state = chatInitialState, { type, payload } ) {

  switch ( type ) {
    case CHATS_LOAD_REQUEST: {
      return { ...state, isFetching: true };
    }
    case CHATS_LOAD_SUCCESS: {
      const mapChatsList = payload.reduce( (acc, chat) => ({
        ...acc, [chat._id]: chat
      }), {})
      return { ...state, isFetching: false, entries: mapChatsList };
    }
    case CHATS_LOAD_ERROR: {
      return { ...state, isFetching: false, error: payload };
    }
    case CHATS_ADD_MESSAGE_SUCCESS: {
      const { chatId, message } = payload;
      const currentChat = state.entries[ chatId ];

      const updatedChat = combineNestedState(
        currentChat, { messages: currentChat.messages.concat( message ) }
      );
      return {
        ...state,
        entries: combineNestedState( state.entries, { [chatId]: updatedChat } )
      };
    }
    case CHATS_DELETE_MESSAGE_SUCCESS: {
      const { chatId, messages } = payload;

      const currentChat = state.entries[ chatId ];

      return {
        ...state,
        entries: combineNestedState( state.entries, {
          [chatId]: { ...currentChat, messages }
        })
      };
    }
    case CHATS_ADD_MESSAGE_ERROR:
    case CHATS_DELETE_MESSAGE_ERROR: {
      return { ...state, error: payload };
    }
    case CHATS_CREATE_SUCCESS: {
      return  {
        ...state, entries: combineNestedState(
          state.entries, { [ payload._id ]: payload  }
        )
      };
    }
    case CHATS_CREATE_ERROR: {
      return { ...state, error: payload };
    }
    case CHATS_DELETE_SUCCESS: {
      const entries = state.entries;
      delete entries[ payload ];
      return { ...state, entries: { ...entries } };
    }
    case CHATS_DELETE_ERROR: {
      return { ...state, error: payload };
    }
    case TOGGLE_NOTIFY: {
      const { entries } = state;
      const { chatId, hasNewMessage } = payload;

      const notifyChat = entries[ chatId ];

      if ( !notifyChat ) {
        return state;
      }

      return {
        ...state,
        entries: combineNestedState( entries, {[ chatId ]: { ...notifyChat, hasNewMessage }}
      )};
    }
    default: {
      return state;
    }
  }
}