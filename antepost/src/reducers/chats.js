import { CHATS_LOAD, CHATS_SEND, CHATS_ADD, CHATS_BLINK, CHATS_UNBLINK, CHATS_DELETE } from 'actions/chats';
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
        blinking: false,
    },
    '2': {
        name: 'Chat 2',
        messages: [
            {
                text: 'Текстовое сообщение 2',
                author: 'Igor'
            },
        ],
        blinking: false,
    },
    '3': {
        name: 'Chat 3',
        messages: [
            {
                text: 'Текстовое сообщение 3',
                author: 'Igor'
            },
        ],
        blinking: false,
    },
};

const initialState = {
    entries: {},
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

    let newId;
    if (Object.keys(chats).length > 0) {
        newId = +Object.keys(chats).reduce((acc, curr) => acc > curr ? acc : curr) + 1;
    } else {
        newId = '1';
    }

    return [newId, {
        name: chatName,
        messages: [
            {
                text: `Welcome to ${chatName}`,
                author: 'Bot',
            },
        ],
        blinking: false,
    }];
};

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
                        messages: { $push: [{ text: action.payload.text, author: action.payload.author }] },
                    }
                }
            });
        case CHATS_ADD:
            const newChatData = makeNewChat(action.payload.chatName, state.entries);
            if (!newChatData) {
                return state;
            }
            return update(state, {
                entries: {
                    [newChatData[0]]: { $set: newChatData[1] },
                }
            });
        case CHATS_BLINK:
            return update(state, {
                entries: {
                    [action.payload]: {
                        blinking: { $set: true },
                    }
                }
            });
        case CHATS_UNBLINK:
            return update(state, {
                entries: {
                    [action.payload]: {
                        blinking: { $set: false },
                    }
                }
            });
        case CHATS_DELETE:
            const newState = JSON.parse(JSON.stringify(state));
            delete newState.entries[action.payload.chatId];
            return newState;
        default:
            return state;
    }
}
