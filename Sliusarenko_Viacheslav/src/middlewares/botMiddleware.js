import { CHATS_ADD_MESSAGE_SUCCESS, addNewMessage } from "actions/chat";

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
  if ( type === CHATS_ADD_MESSAGE_SUCCESS ) {
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
    store.dispatch( addNewMessage( chatId, botConfig.name, getNewBotMessage( author ) ) );
  }
}

/**
 * @param { string|null } author
 * @return { string }
 **/
function getNewBotMessage( author= null ) {
  const { messages } = botConfig;
  const randIndex = Math.floor(Math.random() * messages.length );

  return `${ messages[ randIndex ] } ${ author }!`;
}