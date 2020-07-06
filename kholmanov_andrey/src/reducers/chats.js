import {CHATS_LOAD, CHATS_SEND, CHATS_ADD, CHATS_REMOVE} from 'actions/chats';
import update from 'react-addons-update';

const dataBackend = {
    '1': {
        id: 1,
        name: 'Chat 1',
        messages: [],
    },
    '2': {
        id: 2,
        name: 'Chat 2',
        messages: [],
    },
    '3': {
        id: 3,
        name: 'Chat 3',
        messages: [],
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
            };
        default:
            return state;
    }
};