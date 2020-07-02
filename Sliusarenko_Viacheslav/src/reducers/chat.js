import { combineNestedState } from "../helpers";
import { LOAD_CHAT_LIST, ADD_NEW_MESSAGE, ADD_NEW_CHAT, REMOVE_MESSAGE, REMOVE_CHAT, TOGGLE_NOTIFY } from "../actions/chat";

const chatsMockObject = {
  1: { name: 'mainChat', messages: [], hasNewMessage: false },
}

const chatInitialState = {
  entries: {},
  isLoaded: false
};

export function chatReducer( state = chatInitialState, { type, payload } ) {

  switch ( type ) {
    case LOAD_CHAT_LIST: {
      const { isLoaded } = state;
      const entries = isLoaded ? state.entries : chatsMockObject;

      return { ...state, entries, isLoaded: true };
    }
    case ADD_NEW_MESSAGE: {
      const { entries } = state;
      const { chatId, message } = payload;

      const currentChat = entries[ chatId ];

      if ( !currentChat ) {
        return state;
      }
      const messages = currentChat.messages;
      const { id } = messages[ messages.length - 1] || { id: 0 };

      const updated = combineNestedState(
        currentChat, { messages: messages.concat({ id: id + 1, ...message }) }
      );

      return {
        ...state,
        entries: combineNestedState( entries, { [chatId]: updated } )
      };
    }
    case ADD_NEW_CHAT: {
      const keys = Object.keys( state.entries );
      const newId = ( Number(keys[ keys.length - 1 ]) || 0 ) + 1;
      const newChat = { [ newId ]: { name: payload, messages: [] } };

      return {
        ...state,
        entries: combineNestedState( state.entries, newChat )
      };
    }
    case REMOVE_MESSAGE: {
      const { chatId, messageId } = payload;
      const currentChat = state.entries[ chatId ] || null;

      if ( !currentChat ) {
        return state;
      }

      const messages = currentChat.messages.filter(({ id }) => id !== messageId );

      return {
        ...state, entries: combineNestedState( state.entries, {
          [ chatId ]: combineNestedState( currentChat, { messages })
        })
      }
    }
    case REMOVE_CHAT: {
      const entries = state.entries;
      delete entries[ payload ];

      return { ...state, entries: { ...entries } };
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