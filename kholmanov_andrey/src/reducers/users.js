/**
 * Created by Rusich on 30.06.2020.
 */

import {USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILTURE, CHANGE_USERNAME} from 'actions/users';

const initialState = {
    entries: {}, //Users
    loading: false,
    error: false
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case USER_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case USER_LOAD_FAILTURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        // case CHANGE_USERNAME:
        //     return {
        //
        //     };
        default:
            return state;
    }
};