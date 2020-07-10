import { CHATS_SEND_SUCCESS, chatsBlink } from 'actions/chats';
import { history } from '../store';

export const blinkMiddteware = store => next => action => {
    if (action.type === CHATS_SEND_SUCCESS) {
        const { chatId, message } = action.payload;
        const currentChatId = history.location.pathname.match(/chats\/(.*)/)[1];

        if (message.author === 'Bot' && chatId !== currentChatId) {
            store.dispatch(chatsBlink(chatId));
        }
    }

    return next(action);
}