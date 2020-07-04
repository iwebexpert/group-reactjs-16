import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { chatsReducer } from "./chats";
import { userReducer } from "./user";

export const initReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    chats: chatsReducer,
  });
