import { createAction } from "redux-api-middleware";

export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';

export function changeUsername( username ) {
  return {
    type: CHANGE_USER_NAME, payload: username
  };
}

export const LOAD_PROFILE_REQUEST = 'LOAD_PROFILE_REQUEST';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_ERROR = 'LOAD_PROFILE_ERROR';

export const loadProfile = () => createAction({
  endpoint: `${ process.env.API_URL }profile/`,
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  types: [ LOAD_PROFILE_REQUEST, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_ERROR ]
});