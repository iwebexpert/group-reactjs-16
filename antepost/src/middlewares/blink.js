import { CHATS_SEND, chatsBlink } from 'actions/chats';
import { history } from '../store';

export const blinkMiddteware = store => next => action => {
    if (action.type === CHATS_SEND) {
        const { chatId, author } = action.payload;
        const currentChatId = history.location.pathname.match(/\d/)[0];

        if (author === 'Bot' && chatId !== currentChatId) {
            store.dispatch(chatsBlink(chatId));
        }
    }

    return next(action);
}