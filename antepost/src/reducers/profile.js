import { PROFILE_LOAD_REQUEST, PROFILE_LOAD_SUCCESS, PROFILE_LOAD_FAILTURE } from 'actions/profile';

const dataBackend = {
    name: 'John',
    age: 23,
    email: 'example@example.com',
    phoneNumber: '+7(999)999-99-99',
};

const initialState = {
    entries: {},
    loading: false,
    error: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PROFILE_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case PROFILE_LOAD_FAILTURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}
