export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_BLINK = 'CHATS_BLINK';
export const CHATS_UNBLINK = 'CHATS_UNBLINK';
export const CHATS_DELETE = 'CHATS_DELETE';

export const chatsLoad = () => ({
    type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
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
