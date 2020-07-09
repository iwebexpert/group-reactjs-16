import {CHATS_SEND_REQUEST, chatsSendApi} from "actions/chats";

export function chatBot(store) {
    return function (next) {
        return function (action) {

            const apiMiddleware = action['@@redux-api-middleware/RSAA'];
            if (apiMiddleware && apiMiddleware.types[0] === CHATS_SEND_REQUEST) {
                const author = apiMiddleware.endpoint.match(/(?<=author=)\w+(?=&)/)[0];
                const chatId = apiMiddleware.endpoint.match(/(?<=id=)\w+(?=&)/)[0];
                const chats = store.getState().chats.entries;
                let botPrinting;

                for (let chat of chats) {
                    if (+chat._id === +chatId)
                    botPrinting = chat.botPrinting;
                }

                if (author.toLocaleLowerCase() !== 'bot' && !botPrinting) {
                    setTimeout(() => {
                        store.dispatch(chatsSendApi({
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