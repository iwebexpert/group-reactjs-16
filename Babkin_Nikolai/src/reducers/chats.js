import {
    CHATS_SEND,
    CHATS_ADD,
    CHATS_REMOVE_MESSAGE,
    CHATS_REMOVE,
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILURE,
    CHATS_ADD_REQUEST,
    CHATS_ADD_SUCCESS,
    CHATS_ADD_FAILURE,
} from 'actions/chats';
import update from 'react-addons-update';

const initialState = {
    entries: {},
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_SEND:
            let {botPrinting} = action.payload;
            if (!botPrinting) botPrinting = false;
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                        botPrinting: {$set: botPrinting},
                    }
                }
            });
        case CHATS_REMOVE_MESSAGE:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$set: action.payload.newMessages},
                    }
                }
            });
        case CHATS_REMOVE:
            return update(state, {
                entries: {$set: action.payload.newChats}
            });
        case CHATS_ADD:
            return update(state, {
                entries: {
                    $merge: {
                        [action.payload.chatId]: {
                            name: action.payload.name,
                            messages: [{text: action.payload.text, author: action.payload.author}],
                        }
                    }
                }
            });

        //-------------------Api
        case CHATS_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CHATS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            }
        case CHATS_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case CHATS_ADD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CHATS_ADD_SUCCESS:
            const {name, chatId, messages} = action.payload.newChat;
            return update(state, {
                loading: {$set: false},
                entries: {
                    $merge: {
                        [chatId]: {
                            name,
                            messages,
                            botPrinting: false,
                        }
                    }
                }
            });
        case CHATS_ADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}