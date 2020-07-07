/**
 * Created by Rusich on 06.07.2020.
 */

import {CHATS_SEND, chatsSend, chatsHighlighting} from 'actions/chats';

export const botMiddleware = ( store ) => ( next ) => ( action ) => {
    if(action.type === CHATS_SEND){
        const {chatId, author} = action.payload;

        if(author !== 'Bot'){
            setTimeout(() => {
                store.dispatch(chatsSend({chatId, author: 'Bot', text: `Привет, ${author}! Это бот...`}));
                store.dispatch(chatsHighlighting(chatId));
            }, 3000);
        }
    }
    return next(action);
};