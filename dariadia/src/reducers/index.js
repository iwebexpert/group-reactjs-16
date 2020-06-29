import { combineReducers } from "redux";

import { chatsReducer } from "./chats";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  chats: chatsReducer,
  user: userReducer,
});
