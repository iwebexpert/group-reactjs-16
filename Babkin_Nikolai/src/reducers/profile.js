import {PROFILE_GET, PROFILE_SET} from "actions/profile";
import update from "react-addons-update";

const dataBackend = {
    name: '',
    phone: '+7(999)888-12-34',
    email: 'someEmail@email.com',
    interests: ['bike', 'sport', 'nature']
};

const initialState = {
    entries: {},
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_GET:
            return {
                ...state,
                entries: dataBackend,
            };
        case PROFILE_SET:
            return update(state, {
                entries: {
                    name: {$set: action.payload.name}
                }
            });
        default:
            return state;
    }
}