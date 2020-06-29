import {combineReducers} from "redux";
import {chatReducer} from './chats';
import {profileReducer} from './profile';

export const rootReducer = combineReducers({
   chats: chatReducer,
   profile: profileReducer
});