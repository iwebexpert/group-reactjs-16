import { CHATS_SEND_SUCCESS, chatsSendApi } from 'actions/chats';

export const botMiddteware = store => next => action => {
    if (action.type === CHATS_SEND_SUCCESS) {
        const { chatId, message } = action.payload;

        if (message.author !== 'Bot') {
            setTimeout(() => {
                store.dispatch(chatsSendApi({ chatId, author: 'Bot', text: `Привет, ${message.author}! Это бот...` }));
            }, 3000);
        }
    }

    return next(action);
}
