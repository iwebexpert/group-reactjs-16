import {
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILTURE,
    CHATS_ADD_REQUEST,
    CHATS_ADD_SUCCESS,
    CHATS_ADD_FAILTURE,
    CHATS_SEND,
    CHATS_ADD,
    CHATS_REMOVE,
    CHATS_HIGHLIGHTING
} from 'actions/chats';
import update from 'react-addons-update';

const initialState = {
    entries: {}, //Chats
    loading: false,
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type)
    {
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

        case CHATS_ADD_REQUEST:
            return {
                ...state,
                loading: false
            };
        case CHATS_ADD_SUCCESS: {
            console.log(action);
            const {id, name} = action.payload;
            const newChat = { [ id ]: {
                id: id,
                name: name, messages: []
            } };
            return {
                ...state,
                entries: {
                    ...newChat,
                    ...state.entries,
                },
                loading: false,
            };
        }
        case CHATS_ADD_FAILTURE: {
            return {
                ...state,
                error: payload,
                loading: false,
            };
        }


        case CHATS_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                    }
                }
            });
        // case CHATS_ADD:
        //     const {newId, name} = action.payload;
        //     const newChat = { [ newId ]: {
        //         id: newId,
        //         name: name, messages: []
        //     } };
        //     return {
        //         ...state,
        //         entries: {
        //             ...state.entries,
        //             ...newChat,
        //         },
        //     };
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