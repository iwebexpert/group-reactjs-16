import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {chatsReducer} from './chats';
import {usersReducer} from './users';

export const initReducer = history => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    users: usersReducer,
});