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

const makeNewChat = (chatName, chats) => {
    if (chatName === '') {
        return null;
    }

    const chatNames = [];
    for (const id in chats) {
        chatNames.push(chats[id].name);
    }

    if (chatNames.includes(chatName)) {
        return null;
    }

    const newId = +Object.keys(chats).reduce((acc, curr) => acc > curr ? acc : curr) + 1;

    return [newId, {
        name: chatName,
        messages: [
            {
                text: `Welcome to ${chatName}`,
                author: 'Bot',
            },
        ],
    }];
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
            console.log([{text: action.payload.text, author: action.payload.author}]);
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                    }
                }
            });
        case CHATS_ADD:
            const newChatData = makeNewChat(action.payload.chatName, state.entries);
            if(!newChatData) {
                return state;
            }
            return update(state, {
                entries: {
                    [newChatData[0]]: {$set: newChatData[1]},
                }
            });
        default:
            return state;
    }
}
