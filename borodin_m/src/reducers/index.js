import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';

import {chatReducer} from './chats';
import {profileReducer} from './profile';

export const initReducer = history => combineReducers({
   router: connectRouter(history),
   chats: chatReducer,
   profile: profileReducer
});