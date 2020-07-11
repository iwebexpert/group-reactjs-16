import { createAction } from 'redux-api-middleware';

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';
export const CHATS_SEND_REQUEST = 'CHATS_SEND_REQUEST';
export const CHATS_SEND_SUCCESS = 'CHATS_SEND_SUCCESS';
export const CHATS_SEND_FAILURE = 'CHATS_SEND_FAILURE';
export const CHATS_ADD_REQUEST = 'CHATS_ADD_REQUEST';
export const CHATS_ADD_SUCCESS = 'CHATS_ADD_SUCCESS';
export const CHATS_ADD_FAILURE = 'CHATS_ADD_FAILURE';
export const CHATS_DELETE_REQUEST = 'CHATS_DELETE_REQUEST';
export const CHATS_DELETE_SUCCESS = 'CHATS_DELETE_SUCCESS';
export const CHATS_DELETE_FAILURE = 'CHATS_DELETE_FAILURE';
export const CHATS_BLINK = 'CHATS_BLINK';
export const CHATS_UNBLINK = 'CHATS_UNBLINK';

export const chatsLoadApi = () => createAction({
    endpoint: 'http://localhost:5000/chats',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILURE],
});

export const chatsSendApi = message => createAction({
    endpoint: 'http://localhost:5000/chats/addmessage',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
    types: [CHATS_SEND_REQUEST, CHATS_SEND_SUCCESS, CHATS_SEND_FAILURE],
});

export const chatsAddApi = chatName => createAction({
    endpoint: 'http://localhost:5000/chats/create',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chatName),
    types: [CHATS_ADD_REQUEST, CHATS_ADD_SUCCESS, CHATS_ADD_FAILURE],
});

export const chatsDeleteApi = chatId => createAction({
    endpoint: 'http://localhost:5000/chats/delete',
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chatId),
    types: [CHATS_DELETE_REQUEST, CHATS_DELETE_SUCCESS, CHATS_DELETE_FAILURE],
});

export const chatsBlink = (chatId) => ({
    type: CHATS_BLINK,
    payload: chatId,
});

export const chatsUnblink = (chatId) => ({
    type: CHATS_UNBLINK,
    payload: chatId,
});
