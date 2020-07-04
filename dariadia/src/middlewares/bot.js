import { CHATS_SEND, chatsSend, chatHighlight, chatDehighlight } from "actions/chats";

export function botMiddteware(store) {
  return function dispatchWrap(next) {
    return function dispatchLog(action) {
      if (action.type === CHATS_SEND) {
        const { chatId, author } = action.payload;

        if (author !== "Bot") {
          setTimeout(() => {
            store.dispatch(
              chatsSend({
                chatId,
                author: "Bot",
                text: `Hey ${author}! We've received your message.`,
              })
            );

            store.dispatch(chatHighlight(chatId));
          }, 3000);

          setTimeout(() => {
            store.dispatch(chatDehighlight(chatId));
          }, 6000);
        }
      }

      return next(action);
    };
  };
}
