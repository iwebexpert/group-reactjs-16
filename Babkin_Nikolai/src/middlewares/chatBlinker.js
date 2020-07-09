import {CHATS_SEND_REQUEST} from "actions/chats";

export function chatBlinker(store) {
    return function (next) {
        return function (action) {
            const apiMiddleware = action['@@redux-api-middleware/RSAA'];
            if (apiMiddleware && apiMiddleware.types[0] === CHATS_SEND_REQUEST) {
                const author = apiMiddleware.endpoint.match(/(?<=author=)\w+(?=&)/)[0];
                const chatId = apiMiddleware.endpoint.match(/(?<=id=)\w+(?=&)/)[0];
                if (author.toLocaleLowerCase() === 'bot') {
                    const allChats = document.querySelectorAll('.chat-list_button');
                    let activeChat = [];
                    for (let chat of allChats) {
                        if (+chatId === +chat.id) activeChat = chat;
                    }
                    activeChat.animate([
                        {background: "inherit"},
                        {background: "rgba(30, 79, 255, 0.25)"},
                        {background: "inherit"},
                    ], {
                        duration: 1000,
                        iterations: 3
                    })
                }
            }
            return next(action)
        }
    }
}