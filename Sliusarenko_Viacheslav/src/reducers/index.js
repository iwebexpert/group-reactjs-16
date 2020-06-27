import { combineReducers } from "redux";

import { chatReducer } from 'reducers/chat';
import { profileReducer } from 'reducers/profile';

export default combineReducers({
  chat: chatReducer,
  profile: profileReducer
});