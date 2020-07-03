import { ADD_NEW_MESSAGE, toggleNotify } from 'actions/chat';
import { botConfig } from "./botMiddleware";

/**
 * @param { object } store
 * @return { Function }
 **/
export const notifyMiddleware = ( store ) => ( next ) => ( action ) => {
  const { type, payload } = action;

  next( action );
  if ( type === ADD_NEW_MESSAGE ) {
    const { chatId, message: { author } } = payload;
    const { chat: { entries } } = store.getState();
    const messagesChat = entries[ chatId ] || {};

    if ( !messagesChat.hasNewMessage && author === botConfig.name ) {
      store.dispatch( toggleNotify( chatId ) );
    }
  }
}
