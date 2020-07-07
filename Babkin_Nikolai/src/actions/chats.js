export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_REMOVE_MESSAGE = 'CHATS_REMOVE_MESSAGE';
export const CHATS_REMOVE = 'CHATS_REMOVE';

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const chatsRemoveMessage = (chatId, newMessages) => ({
    type: CHATS_REMOVE_MESSAGE,
    payload: {chatId, newMessages}
})

export const chatsRemove = (newChats) => ({
    type: CHATS_REMOVE,
    payload: {newChats}
})

export const chatsAdd = (newChat) => ({
    type: CHATS_ADD,
    payload: newChat,
});

//redux-api-middleware
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';

import {createAction} from "redux-api-middleware";

export const chatsLoadApi = () => createAction({
    endpoint: 'http://localhost:5000/chats',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILURE],
})

export const CHATS_ADD_REQUEST = 'CHATS_ADD_REQUEST';
export const CHATS_ADD_SUCCESS = 'CHATS_ADD_SUCCESS';
export const CHATS_ADD_FAILURE = 'CHATS_ADD_FAILURE';

export const chatsAddApi = (newChat) => createAction({
    endpoint: `http://localhost:5000/chats/create?name=${newChat.name}&&unread=false&&id=${newChat.chatId}`,
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_ADD_REQUEST, CHATS_ADD_SUCCESS, CHATS_ADD_FAILURE],
})