export const CHATS_SEND = "CHATS_SEND";
export const CHAT_ADD = "CHAT_ADD";
export const CHAT_DELETE = "CHAT_DELETE";

export const CHAT_HIGHLIGHT = "CHAT_TOGGLE_HIGHLIGHT";
export const CHAT_DEHIGHLIGHT = "CHAT_DEHIGHLIGHT";

export const CHATS_LOAD_REQUEST = "CHATS_LOAD_REQUEST";
export const CHATS_LOAD_SUCCESS = "CHATS_LOAD_SUCCESS";
export const CHATS_LOAD_FAILURE = "CHATS_LOAD_FAILURE";

export const chatsLoadApiRequest = () => ({
  type: CHATS_LOAD_REQUEST,
});

export const chatsLoadApiSuccess = (data) => ({
  type: CHATS_LOAD_SUCCESS,
  payload: data,
});

export const chatsLoadApiFailture = (error) => ({
  type: CHATS_LOAD_FAILURE,
  payload: error,
});

export const chatsLoadApi = () => {
  return async (dispatch) => {
    try {
      dispatch(chatsLoadApiRequest());
      const result = await fetch("http://localhost:5000/chats");
      dispatch(chatsLoadApiSuccess(await result.json()));
    } catch (error) {
      dispatch(chatsLoadApiFailture(error));
    }
  };
};

export const chatsSend = (message) => ({
  type: CHATS_SEND,
  payload: message,
});

export const chatAdd = (chatId, name) => ({
  type: CHAT_ADD,
  payload: { chatId, name },
});

export const chatDelete = (chatId) => ({
  type: CHAT_DELETE,
  payload: { chatId },
});

export const chatHighlight = (chatId) => ({
  type: CHAT_HIGHLIGHT,
  payload: { chatId },
});

export const chatDehighlight = (chatId) => ({
  type: CHAT_DEHIGHLIGHT,
  payload: { chatId },
});
