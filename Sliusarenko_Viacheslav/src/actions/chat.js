export const LOAD_CHAT_LIST = 'LOAD_CHAT_LIST';

export function loadChats() {
  return { type: LOAD_CHAT_LIST };
}

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export function addNewMessage( chatId, message ) {
  return {
    type: ADD_NEW_MESSAGE, chatId, message
  };
}

export const ADD_NEW_CHAT = 'ADD_NEW_CHAT';

export function addNewChat( name ) {
  return { type: ADD_NEW_CHAT, name };
}