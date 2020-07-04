import { createAction } from "redux-api-middleware";

export const TOGGLE_NOTIFY = 'TOGGLE_NOTIFY';

export function toggleNotify( chatId, hasNewMessage = true ) {
  return { type: TOGGLE_NOTIFY, payload: { chatId, hasNewMessage } };
}

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_ERROR = 'CHATS_LOAD_ERROR';

export const loadChats = () => createAction({
  endpoint: `${ process.env.API_URL }chats/`,
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  types: [ CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_ERROR ]
});

export const CHATS_CREATE_REQUEST = 'CHATS_CREATE_REQUEST';
export const CHATS_CREATE_SUCCESS = 'CHATS_CREATE_SUCCESS';
export const CHATS_CREATE_ERROR = 'CHATS_CREATE_ERROR';

export const addNewChat = ( name ) => createAction({
  endpoint: `${ process.env.API_URL }chats/create?name=${ name }`,
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  types: [ CHATS_CREATE_REQUEST, CHATS_CREATE_SUCCESS, CHATS_CREATE_ERROR ]
});

export const CHATS_DELETE_REQUEST = 'CHATS_DELETE_REQUEST';
export const CHATS_DELETE_SUCCESS = 'CHATS_DELETE_SUCCESS';
export const CHATS_DELETE_ERROR = 'CHATS_DELETE_ERROR';

export const removeChat = ( chatId ) => createAction({
  endpoint: `${ process.env.API_URL }chats/delete?chatId=${ chatId }`,
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  types: [ CHATS_DELETE_REQUEST, CHATS_DELETE_SUCCESS, CHATS_DELETE_ERROR ]
});

export const CHATS_ADD_MESSAGE_REQUEST = 'CHATS_ADD_MESSAGE_REQUEST';
export const CHATS_ADD_MESSAGE_SUCCESS = 'CHATS_ADD_MESSAGE_SUCCESS';
export const CHATS_ADD_MESSAGE_ERROR = 'CHATS_ADD_MESSAGE_ERROR';

export const addNewMessage = ( chatId, author, message ) => createAction({
  endpoint: `${ process.env.API_URL }chats/addmessage?chatId=${ chatId }&author=${ author }&text=${ message }`,
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  types: [ CHATS_ADD_MESSAGE_REQUEST, CHATS_ADD_MESSAGE_SUCCESS, CHATS_ADD_MESSAGE_ERROR ]
});

export const CHATS_DELETE_MESSAGE_REQUEST = 'CHATS_DELETE_MESSAGE_REQUEST';
export const CHATS_DELETE_MESSAGE_SUCCESS = 'CHATS_DELETE_MESSAGE_SUCCESS';
export const CHATS_DELETE_MESSAGE_ERROR = 'CHATS_DELETE_MESSAGE_ERROR';

export const removeMessage = ( chatId, messageId ) => createAction({
  endpoint: `${ process.env.API_URL }chats/${ chatId }/messages/${ messageId }`,
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  types: [ CHATS_DELETE_MESSAGE_REQUEST, CHATS_DELETE_MESSAGE_SUCCESS, CHATS_DELETE_MESSAGE_ERROR ]
});