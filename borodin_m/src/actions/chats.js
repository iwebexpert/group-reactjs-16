import {createAction} from 'redux-api-middleware';

export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_FIRE = 'CHAT_FIRE';
export const CHAT_UNFIRE = 'CHAT_UNFIRE';
export const CHAT_REMOVE = 'CHAT_REMOVE';
export const MESSAGE_REMOVE = 'MESSAGE_REMOVE';

export const chatsLoad = () => ({
    type: CHATS_LOAD
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message
});

export const chatsAdd = (chatID, chatName) => ({
    type: CHAT_ADD,
    payload: {chatID, chatName}
});

export const chatFire = (chatID) => ({
    type: CHAT_FIRE,
    payload: chatID
});

export const chatUnFire = (chatID) => ({
    type: CHAT_UNFIRE,
    payload: chatID
});

export const chatsRemove = (id) => ({
   type: CHAT_REMOVE,
   payload: id
});

export const messageRemove = (chatId, messageID) => ({
    type: MESSAGE_REMOVE,
    payload: {chatId, messageID}
});

//redux-api-middleware
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE';

export const CHATS_SEND_REQUEST = 'CHATS_SEND_REQUEST';
export const CHATS_SEND_SUCCESS = 'CHATS_SEND_SUCCESS';
export const CHATS_SEND_FAILURE = 'CHATS_SEND_FAILURE';

export const chatsLoadApi = () => createAction({
    endpoint: 'http://localhost:5000/chats',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILURE],
});

export const chatsSendApi = (message) => createAction({
    endpoint: `http://localhost:5000/chats/addmessage?chatId=${message.chatID}&author=${message.author}&text=${message.text}`,
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [CHATS_SEND_REQUEST, CHATS_SEND_SUCCESS, CHATS_SEND_FAILURE],
});