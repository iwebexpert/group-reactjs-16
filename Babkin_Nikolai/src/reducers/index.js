import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {chatsReducer} from "reducers/chats";
import {profileReducer} from "reducers/profile";


export const initReducer = history => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    profile: profileReducer,
});

