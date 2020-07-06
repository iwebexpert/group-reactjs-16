/**
 * Created by Rusich on 30.06.2020.
 */

import {LOAD_PROFILE, CHANGE_USERNAME} from 'actions/users';

const dataBackend = {
    id: 1,
    username: 'andrey',
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
        // case CHANGE_USERNAME:
        //     return {
        //
        //     };
        default:
            return state;
    }
};