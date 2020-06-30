/**
 * Created by Rusich on 30.06.2020.
 */

export const LOAD_PROFILE = 'LOAD_PROFILE';
export const CHANGE_USERNAME = 'CHANGE_USERNAME';

export function loadProfile() {
    return { type: LOAD_PROFILE };
}

export function changeUsername( username ) {
    return {
        type: CHANGE_USERNAME, username
    };
}