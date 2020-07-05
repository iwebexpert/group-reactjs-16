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