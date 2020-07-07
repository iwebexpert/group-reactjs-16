export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_REMOVE = 'CHATS_REMOVE';
export const CHATS_HIGHLIGHTING = 'CHATS_HIGHLIGHTING'; //highlighting

export const chatsLoad = () => ({
    type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const chatsAdd = (name) => ({
    type: CHATS_ADD,
    payload: name,
});

export const chatsRemove = (chatId) => ({
    type: CHATS_REMOVE,
    payload: chatId,
});

export const chatsHighlighting = (chatId) => ({
    type: CHATS_HIGHLIGHTING,
    payload: {chatId},
});