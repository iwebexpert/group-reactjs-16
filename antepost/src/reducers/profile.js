import {PROFILE_LOAD} from 'actions/profile';

const dataBackend = {
    name: 'John',
    age: 23,
    email: 'example@example.com',
    phoneNumber: '+7(999)999-99-99',
};

const initialState = {
    entries: {}, //Profile
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
