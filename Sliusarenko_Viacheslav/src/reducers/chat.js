import { combineNestedState } from "../helpers";
import { LOAD_CHAT_LIST, ADD_NEW_MESSAGE, ADD_NEW_CHAT } from "../actions/chat";

const chatsMockObject = {
  1: { name: 'mainChat', messages: [] },
}

const chatInitialState = {
  entries: {},
  isLoaded: false
};

export function chatReducer( state = chatInitialState, { type, ...payload } ) {

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

      message.id = ( currentChat.messages.length + 1 );
      const updated = combineNestedState(
        currentChat, { messages: currentChat.messages.concat( message ) }
      );

      return {
        ...state,
        entries: combineNestedState( entries, { [chatId]: updated } )
      };
    }
    case ADD_NEW_CHAT: {
      const { name } = payload;
      const keys = Object.keys( state.entries );
      const newId = Number( keys[ keys.length - 1 ] ) + 1;

      const newChat = { [ newId ]: { name, messages: [] } };

      return {
        ...state,
        entries: combineNestedState( state.entries, newChat )
      };
    }
    default: {
      return state;
    }
  }
}