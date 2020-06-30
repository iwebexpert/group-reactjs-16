import {combineReducers} from 'redux';

import {chatsReducer} from './chats';
import {usersReducer} from './users';

export const rootReducer = combineReducers({
    chats: chatsReducer,
    users: usersReducer,
});