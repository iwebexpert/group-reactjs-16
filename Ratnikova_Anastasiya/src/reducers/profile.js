import {PROFILE_LOAD} from 'actions/profile';

const dataBackend = {
    name: 'User',
    email: 'user@mail.ru',
    phone: '8-800-800-80-80'
};

const initialState = {
    entries: {},
    loading: false,
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case PROFILE_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };
        default:
            return state;
    }
}