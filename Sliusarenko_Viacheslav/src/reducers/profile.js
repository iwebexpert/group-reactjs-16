import {
  CHANGE_USER_NAME,
  LOAD_PROFILE_ERROR,
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS
} from "../actions/profile";

const profileInitialState = {
  username: '',
  personalData: {},
  isFetching: true,
};

export function profileReducer( state = profileInitialState, { type, payload } ) {
  switch ( type ) {
    case LOAD_PROFILE_REQUEST: {
      return { ...state, isLoaded: true };
    }
    case LOAD_PROFILE_SUCCESS: {
      return { ...state, personalData: payload , isFetching: false };
    }
    case LOAD_PROFILE_ERROR: {
      return { ...state, error: payload, isFetching: false };
    }
    case CHANGE_USER_NAME: {
      return { ...state, username: payload };
    }
    default: {
      return state;
    }
  }
}