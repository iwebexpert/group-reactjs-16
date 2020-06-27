import { CHANGE_USER_NAME, LOAD_PROFILE } from "../actions/profile";

const mockPersonalData = {
  age: 28,
  bio: '....'
};

const profileInitialState = {
  username: '',
  personalData: {},
  isLoaded: false,
};

export function profileReducer( state = profileInitialState, { type, ...payload } ) {
  switch ( type ) {
    case LOAD_PROFILE: {
      const { isLoaded } = state;
      const personalData = isLoaded ? state.personalData : mockPersonalData;

      return { ...state, personalData, isLoaded: true };
    }
    case CHANGE_USER_NAME: {
      const { username } = payload;
      return { ...state, username };
    }
    default: {
      return state;
    }
  }
}