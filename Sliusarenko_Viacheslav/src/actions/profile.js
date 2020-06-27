export const LOAD_PROFILE = 'LOAD_PROFILE';

export function loadProfile() {
  return { type: LOAD_PROFILE };
}

export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';

export function changeUsername( username ) {
  return {
    type: CHANGE_USER_NAME, username
  };
}