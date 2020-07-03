export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_REMOVE_MESSAGE = 'CHATS_REMOVE_MESSAGE';
export const CHATS_REMOVE = 'CHATS_REMOVE';

export const chatsLoad = () => ({
    type: CHATS_LOAD,
});

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