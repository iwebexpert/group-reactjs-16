export const CHATS_LOAD = "CHATS_LOAD";
export const CHATS_SEND = "CHATS_SEND";
export const CHAT_ADD = "CHAT_ADD";

export const CHAT_HIGHLIGHT = "CHAT_TOGGLE_HIGHLIGHT";
export const CHAT_DEHIGHLIGHT = "CHAT_DEHIGHLIGHT";

export const chatsLoad = () => ({
  type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
  type: CHATS_SEND,
  payload: message,
});

export const chatAdd = (chatId, name) => ({
  type: CHAT_ADD,
  payload: { chatId, name },
});

export const chatHighlight = (chatId) => ({
  type: CHAT_HIGHLIGHT,
  payload: { chatId },
});

export const chatDehighlight = (chatId) => ({
  type: CHAT_DEHIGHLIGHT,
  payload: { chatId },
});
