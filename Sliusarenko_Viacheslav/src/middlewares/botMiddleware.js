import { ADD_NEW_MESSAGE, addNewMessage } from "actions/chat";

export const botConfig = {
  name: 'ChatBot',
  messages: [ 'Hello', 'Hello Again', 'Write something' ],
  timeout: 3000,
}

/**
 * @param { object } store
 * @return { Function }
 **/
export const botMiddleware = ( store ) => ( next ) => ( action ) => {
  const { type, payload } = action;
  next( action );
  if ( type === ADD_NEW_MESSAGE ) {
    const { chatId } = payload;
    setTimeout( writeBotMessage( chatId, store ), botConfig.timeout )
  }
}

/**
 * @param { number } chatId
 * @param { object } store
 * @return { Function }
 **/
const writeBotMessage = ( chatId, store ) => () => {
  const { chat: { entries } } = store.getState();
  const currentChatMessages = entries[ chatId ] ? entries[ chatId ].messages : [];
  const { author } = currentChatMessages[ currentChatMessages.length - 1 ] || {};

  if ( author && author !== botConfig.name ) {
    const message = !author ? botConfig.messages[ 0 ] : ( getNewBotMessage( author ) );
    store.dispatch( addNewMessage( chatId, message ) );
  }
}

/**
 * @param { string } author
 * @return { Object<{ author: string, message: string }> }
 **/
function getNewBotMessage( author ) {
  const { messages } = botConfig;
  const randIndex = Math.floor(Math.random() * messages.length );

  return {
    author: botConfig.name,
    message: `${ messages[ randIndex ] } ${ author }!`,
  }
}