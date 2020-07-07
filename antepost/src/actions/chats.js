import { createAction } from 'redux-api-middleware';

export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILTURE = 'CHATS_LOAD_FAILTURE';
export const CHATS_SEND_REQUEST = 'CHATS_SEND_REQUEST';
export const CHATS_SEND_SUCCESS = 'CHATS_SEND_SUCCESS';
export const CHATS_SEND_FAILTURE = 'CHATS_SEND_FAILTURE';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_BLINK = 'CHATS_BLINK';
export const CHATS_UNBLINK = 'CHATS_UNBLINK';
export const CHATS_DELETE = 'CHATS_DELETE';

export const chatsLoadApi = () => createAction({
    endpoint: 'http://localhost:5000/chats',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILTURE],
});

export const chatsSendApi = message => createAction({
    endpoint: 'http://localhost:5000/chats/addmessage',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
    types: [CHATS_SEND_REQUEST, CHATS_SEND_SUCCESS, CHATS_SEND_FAILTURE],
});

export const chatsAdd = (chatName) => ({
    type: CHATS_ADD,
    payload: chatName,
});

export const chatsBlink = (chatId) => ({
    type: CHATS_BLINK,
    payload: chatId,
});

export const chatsUnblink = (chatId) => ({
    type: CHATS_UNBLINK,
    payload: chatId,
});

export const chatsDelete = (chatId) => ({
    type: CHATS_DELETE,
    payload: chatId,
});
