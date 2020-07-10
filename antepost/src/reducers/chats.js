import update from 'react-addons-update';

import {
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILURE,
    CHATS_SEND_REQUEST,
    CHATS_SEND_SUCCESS,
    CHATS_SEND_FAILURE,
    CHATS_ADD_REQUEST,
    CHATS_ADD_SUCCESS,
    CHATS_ADD_FAILURE,
    CHATS_DELETE_REQUEST,
    CHATS_DELETE_SUCCESS,
    CHATS_DELETE_FAILURE,
    CHATS_BLINK,
    CHATS_UNBLINK,
} from 'actions/chats';

const initialState = {
    entries: {},
    loading: false,
    error: false,
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CHATS_LOAD_SUCCESS:
            for (const chat in action.payload) {
                action.payload[chat].blinking = false;
            }
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case CHATS_LOAD_FAILURE:
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
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: { $push: [action.payload.message] },
                    }
                }
            });
        case CHATS_SEND_FAILURE:
            return {
                ...state,
                error: true,
            };
        case CHATS_ADD_REQUEST:
            return {
                ...state,
            };
        case CHATS_ADD_SUCCESS:
            action.payload.newDoc.blinking = false;
            return update(state, {
                entries: {
                    [action.payload.newDoc._id]: { $set: action.payload.newDoc }
                }
            });
        case CHATS_ADD_FAILURE:
            return {
                ...state,
                error: true,
            };
        case CHATS_DELETE_REQUEST:
            return {
                ...state,
            };
        case CHATS_DELETE_SUCCESS:
            const newChats = JSON.parse(JSON.stringify(state.entries));
            delete newChats[action.payload.chatId];
            return update(state, {
                entries: { $set: newChats }
            });
        case CHATS_DELETE_FAILURE:
            return {
                ...state,
                error: true,
            };
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
        default:
            return state;
    }
}
