import {CHATS_LOAD, CHATS_SEND, CHATS_ADD, CHATS_REMOVE, CHATS_HIGHLIGHTING} from 'actions/chats';
import update from 'react-addons-update';

const dataBackend = {
    '1': {
        id: 1,
        name: 'Chat 1',
        messages: [],
        highlighting: false,
    },
    '2': {
        id: 2,
        name: 'Chat 2',
        messages: [],
        highlighting: false,
    },
    '3': {
        id: 3,
        name: 'Chat 3',
        messages: [],
        highlighting: false,
    },
};

const initialState = {
    entries: {}, //Chats
    loading: false,
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };
        case CHATS_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                    }
                }
            });
        case CHATS_ADD:
            const keys = Object.keys( state.entries );
            const newId = Number( keys[ keys.length - 1 ] ) + 1;
            const newChat = { [ newId ]: { id: newId, name: action.payload, messages: [] } };
            return {
                ...state,
                entries: {
                    ...state.entries,
                    ...newChat,
                },
            };
        case CHATS_REMOVE:
            delete state.entries[action.payload];
            return {
                ...state,
                entries: {
                    ...state.entries,
                },
            };
        case CHATS_HIGHLIGHTING:
            const chat = state.entries[action.payload.chatId];
            chat.highlighting = !chat.highlighting;
            return update(state, {
                entries: {$merge: {
                        [action.payload.chatId]: chat
                    }
                }
            });
        default:
            return state;
    }
};