export const LOAD_CHAT_LIST = 'LOAD_CHAT_LIST';

export function loadChats() {
  return { type: LOAD_CHAT_LIST };
}

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export function addNewMessage( chatId, message ) {
  return {
    type: ADD_NEW_MESSAGE,
    payload: { chatId, message }
  };
}

export const ADD_NEW_CHAT = 'ADD_NEW_CHAT';

export function addNewChat( name ) {
  return { type: ADD_NEW_CHAT, payload: name };
}

export const REMOVE_CHAT = 'REMOVE_CHAT';

export function removeChat( chatId ) {
  return { type: REMOVE_CHAT, payload: chatId };
}

export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export function removeMessage( chatId, messageId ) {
  return { type: REMOVE_MESSAGE, payload: { chatId, messageId } };
}

export const TOGGLE_NOTIFY = 'TOGGLE_NOTIFY';

export function toggleNotify( chatId, hasNewMessage = true ) {
  return { type: TOGGLE_NOTIFY, payload: { chatId, hasNewMessage } };
}