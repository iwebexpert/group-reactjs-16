import {CHATS_SEND, chatsSend} from "actions/chats";

export function chatBot(store) {
    return function (next) {
        return function (action) {
            if (action.type === CHATS_SEND) {
                const {author, chatId} = action.payload;
                const {botPrinting} = store.getState().chats.entries[chatId];

                if (author.toLocaleLowerCase() !== 'bot' && !botPrinting) {
                    setTimeout(() => {
                        store.dispatch(chatsSend({
                            author: 'Bot',
                            text: 'Bot from middleware',
                            chatId,
                            botPrinting: false,
                        }));
                    }, 2000)
                }
            }
            return next(action);
        }
    }
}