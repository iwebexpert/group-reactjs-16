export const CHATS_LOAD = "CHATS_LOAD";
export const CHATS_SEND = "CHATS_SEND";
export const CHAT_ADD = "CHAT_ADD";

export const chatsLoad = () => ({
  type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
  type: CHATS_SEND,
  payload: message,
});

export const chatAdd = (chatname) => ({
  type: CHAT_ADD,
  payload: chatname,
});
