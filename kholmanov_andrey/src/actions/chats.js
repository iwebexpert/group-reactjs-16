import {createAction} from 'redux-api-middleware';

//redux-api-middleware
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILTURE = 'CHATS_LOAD_FAILTURE';
export const CHATS_ADD_REQUEST = 'CHATS_ADD_REQUEST';
export const CHATS_ADD_SUCCESS = 'CHATS_ADD_SUCCESS';
export const CHATS_ADD_FAILTURE = 'CHATS_ADD_FAILTURE';

export const CHATS_SEND = 'CHATS_SEND';
// export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_REMOVE = 'CHATS_REMOVE';
export const CHATS_HIGHLIGHTING = 'CHATS_HIGHLIGHTING'; //highlighting

export const chatsLoadApi = () => createAction({
    endpoint: 'http://localhost:5000/chats',
    // endpoint: '/api/chats.json',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILTURE],
});

export const chatsAddApi = (newId, name) => createAction({
    endpoint: `http://localhost:5000/chats/create?name=${ name }&id=${ newId }&unread=false`,
    // endpoint: '/api/chats.json',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_ADD_REQUEST, CHATS_ADD_SUCCESS, CHATS_ADD_FAILTURE],
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const chatsAdd = (newId, name) => ({
    type: CHATS_ADD,
    payload: {newId, name},
});

export const chatsRemove = (chatId) => ({
    type: CHATS_REMOVE,
    payload: chatId,
});

export const chatsHighlighting = (chatId) => ({
    type: CHATS_HIGHLIGHTING,
    payload: {chatId},
});