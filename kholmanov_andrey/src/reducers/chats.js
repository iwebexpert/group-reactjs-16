import {CHATS_LOAD, CHATS_SEND, CHATS_ADD} from 'actions/chats';
import update from 'react-addons-update';

const dataBackend = {
    '1': {
        name: 'Chat 1',
        messages: [
            {
                text: 'Текстовое сообщение 1',
                author: 'Igor'
            },
        ],
    },
    '2': {
        name: 'Chat 2',
        messages: [
            {
                text: 'Текстовое сообщение 2',
                author: 'Igor'
            },
        ],
    },
    '3': {
        name: 'Chat 3',
        messages: [
            {
                text: 'Текстовое сообщение 3',
                author: 'Igor'
            },
        ],
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
            const newChat = { [ newId ]: { name: action.payload, messages: [] } };
            console.log(newChat);
            return {
                ...state,
                entries: {
                    ...state.entries,
                    ...newChat,
                },
            };
        default:
            return state;
    }
};