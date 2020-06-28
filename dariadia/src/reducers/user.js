import { USER_LOAD, USER_ADD } from "actions/user";

const initialState = {
  currentUser: { username: "GUEST", email: "" },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
      };
    case USER_ADD:
      return {
        ...state,
        currentUser: { ...action.payload },
      };
    default:
      return state;
  }
};
