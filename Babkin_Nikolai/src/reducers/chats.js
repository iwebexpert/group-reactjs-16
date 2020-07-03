import {CHATS_LOAD, CHATS_SEND, CHATS_ADD, CHATS_REMOVE_MESSAGE, CHATS_REMOVE} from 'actions/chats';
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
        ],
        botPrinting: false,
    },
    2: {
        name: 'Chat 2',
        messages: [
            {
                author: 'Second Author',
                text: 'second message'
            },
        ],
        botPrinting: false,
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
        ],
        botPrinting: false,
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
            console.log(action.payload.newChats)
            console.log(state.entries)
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
        default:
            return state;
    }
}