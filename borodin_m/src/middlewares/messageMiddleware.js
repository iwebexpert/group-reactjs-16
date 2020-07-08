import {CHATS_SEND, chatsSend, chatFire, chatUnFire} from 'actions/chats';

export default store => next => (action) => {
    let result;

    switch (action.type) {
        case CHATS_SEND:
            const {chatID, author} = action.payload;

            if (author !== 'Bot') {
                setTimeout(() => {
                    store.dispatch(chatsSend({chatID, author: 'Bot', text: `Привет, ${author}! Это бот...`}))
                }, 1500);
            } else {
                result = next(action);

                const state = store.getState();
                const pathname = state.router.location.pathname;
                const currentChatID = pathname.replace('/chats/', '');

                if (chatID !== currentChatID) {
                    let timer = setInterval(() => {
                        store.dispatch(chatFire(chatID));
                        setTimeout(() => {
                            store.dispatch(chatUnFire(chatID))
                        }, 250);
                    }, 500);

                    setTimeout(() => {
                        clearInterval(timer);
                    }, 2000);
                }
            }
    }
    return (typeof result !== "undefined" ? result : next(action));
};