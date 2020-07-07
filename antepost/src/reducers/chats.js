import update from 'react-addons-update';

import {
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILTURE,
    CHATS_SEND_REQUEST,
    CHATS_SEND_SUCCESS,
    CHATS_SEND_FAILTURE,
    CHATS_ADD,
    CHATS_BLINK,
    CHATS_UNBLINK,
    CHATS_DELETE,
} from 'actions/chats';

const initialState = {
    entries: {},
    loading: false,
    error: false,
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
        case CHATS_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CHATS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case CHATS_LOAD_FAILTURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case CHATS_SEND_REQUEST:
            return {
                ...state,
            };
        case CHATS_SEND_SUCCESS:
            console.log(action.payload);
            console.log(state.entries[action.payload.chatId]);
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: { $push: [action.payload.message] },
                    }
                }
            });
        case CHATS_SEND_FAILTURE:
            return {
                ...state,
                error: true,
            };
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
        /* case CHATS_BLINK:
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
            }); */
        case CHATS_DELETE:
            const newState = JSON.parse(JSON.stringify(state));
            delete newState.entries[action.payload.chatId];
            return newState;
        default:
            return state;
    }
}
