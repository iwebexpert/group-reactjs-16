import {CHATS_SEND} from "actions/chats";

export function chatBlinker(store) {
    return function (next) {
        return function (action) {
            if (action.type === CHATS_SEND) {
                const {chatId, author} = action.payload
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