import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  USER_ADD,
  USER_LOG_OUT,
} from "actions/user";

const initialState = {
  currentUser: { username: "GUEST", email: "" },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case USER_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case USER_ADD:
      return {
        ...state,
        currentUser: { ...action.payload },
      };
    case USER_LOG_OUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
