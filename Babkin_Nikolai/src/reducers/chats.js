import {CHATS_LOAD, CHATS_SEND, CHATS_ADD} from 'actions/chats';
import update from 'react-addons-update';

const dataBackend = {
    1: {
        name: 'Chat 1',
        messages: [
            {
                author: 'Author 1',
                text: 'first message'
            },
            {
                author: 'Second Author',
                text: 'second message'
            },
        ]
    },
    2: {
        name: 'Chat 2',
        messages: [
            {
                author: 'Second Author',
                text: 'second message'
            },
        ]
    },
    3: {
        name: 'Chat 3',
        messages: [
            {
                author: 'Some Author',
                text: 'bla bla bla'
            },
            {
                author: 'Author',
                text: 'hello'
            },
        ]
    },
};

const initialState = {
    entries: {},
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}