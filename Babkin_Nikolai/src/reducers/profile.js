import {
    PROFILE_GET,
    PROFILE_SET,
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_GET_FAILURE,
    PROFILE_SET_REQUEST,
    PROFILE_SET_SUCCESS,
    PROFILE_SET_FAILURE,
} from "actions/profile";

import update from "react-addons-update";
const initialState = {
    entries: {},
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_SET:
            return update(state, {
                entries: {
                    name: {$set: action.payload.name}
                }
            });
        case PROFILE_GET_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PROFILE_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            }
        case PROFILE_GET_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case PROFILE_SET_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PROFILE_SET_SUCCESS:
            return update(state, {
                loading: {$set: false},
                entries: {
                    name: {$set: action.payload.name}
                }
            });
        case PROFILE_SET_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}