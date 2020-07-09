export const CHATS_REMOVE_MESSAGE = 'CHATS_REMOVE_MESSAGE';

export const chatsRemoveMessage = (chatId, newMessages) => ({
    type: CHATS_REMOVE_MESSAGE,
    payload: {chatId, newMessages}
})

//redux-api-middleware
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';

export const CHATS_ADD_REQUEST = 'CHATS_ADD_REQUEST';
export const CHATS_ADD_SUCCESS = 'CHATS_ADD_SUCCESS';
export const CHATS_ADD_FAILURE = 'CHATS_ADD_FAILURE';

export const CHATS_SEND_REQUEST = 'CHATS_SEND_REQUEST';
export const CHATS_SEND_SUCCESS = 'CHATS_SEND_SUCCESS';
export const CHATS_SEND_FAILURE = 'CHATS_SEND_FAILURE';

export const CHATS_DELETE_REQUEST = 'CHATS_DELETE_REQUEST';
export const CHATS_DELETE_SUCCESS = 'CHATS_DELETE_SUCCESS';
export const CHATS_DELETE_FAILURE = 'CHATS_DELETE_FAILURE';

import {createAction} from "redux-api-middleware";

export const chatsLoadApi = () => createAction({
    endpoint: 'http://localhost:5000/chats',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILURE],
})

export const chatsAddApi = (newChat) => createAction({
    endpoint: `http://localhost:5000/chats/create?name=${newChat.name}&unread=false&id=${newChat._id}`,
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_ADD_REQUEST, CHATS_ADD_SUCCESS, CHATS_ADD_FAILURE],
})

export const chatsSendApi = (message) => createAction({
    endpoint: `http://localhost:5000/chats/addmessage?id=${message.chatId}&author=${message.author}&text=${message.text}&botprinting=${message.botPrinting}`,
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_SEND_REQUEST, CHATS_SEND_SUCCESS, CHATS_SEND_FAILURE],
})

export const chatsDeleteApi = (chatId) => createAction({
    endpoint: `http://localhost:5000/chats/delete?chatId=${chatId}`,
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_DELETE_REQUEST, CHATS_DELETE_SUCCESS, CHATS_DELETE_FAILURE],
})