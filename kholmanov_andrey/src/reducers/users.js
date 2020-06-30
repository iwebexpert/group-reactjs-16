/**
 * Created by Rusich on 30.06.2020.
 */

import {LOAD_PROFILE, CHANGE_USERNAME} from 'actions/users';

const dataBackend = {
    1: {
        id: 1,
        username: 'andrey',
    },
    2: {
        id: 2,
        username: 'igor',
    }
};

const initialState = {
    entries: {}, //Users
    loading: false,
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case LOAD_PROFILE:
            return {
                ...state,
                entries: dataBackend,
            };
        default:
            return state;
    }
};