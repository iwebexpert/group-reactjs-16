import {
    CHATS_REMOVE_MESSAGE,

    CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILURE,
    CHATS_ADD_REQUEST, CHATS_ADD_SUCCESS, CHATS_ADD_FAILURE,
    CHATS_SEND_REQUEST, CHATS_SEND_SUCCESS, CHATS_SEND_FAILURE,
    CHATS_DELETE_REQUEST, CHATS_DELETE_SUCCESS, CHATS_DELETE_FAILURE,
} from 'actions/chats';
import update from 'react-addons-update';

const initialState = {
    entries: {},
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_REMOVE_MESSAGE:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$set: action.payload.newMessages},
                    }
                }
            });
//-------------------Api-------------------
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
            const {name, _id, messages} = action.payload.newChat;
            return update(state, {
                loading: {$set: false},
                entries: {
                    $push: [{
                        name,
                        messages,
                        botPrinting: false,
                        _id,
                    }]
                }
            });
        case CHATS_ADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case CHATS_SEND_REQUEST:
            return {
                ...state,
            }
        case CHATS_SEND_SUCCESS:
            let keyForChat;
            for (let key in state.entries) {
                if (state.entries[key]._id === action.payload.chatMessages.chatId) {
                    keyForChat = key
                    break;
                }
            }
            return update(state, {
                entries: {
                    [keyForChat]: {
                        messages: {
                            $push: [
                                {text: action.payload.chatMessages.text, author: action.payload.chatMessages.author}
                            ]
                        },
                        botPrinting: {$set: !!action.payload.chatMessages.botPrinting},
                    }
                }
            });
        case CHATS_SEND_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case CHATS_DELETE_REQUEST:
            return {
                ...state,
            }
        case CHATS_DELETE_SUCCESS:
            return update(state, {
                entries: {$set: action.payload.newChats}
            });
        case CHATS_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}