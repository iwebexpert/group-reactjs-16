import {PROFILE_LOAD_REQUEST, PROFILE_LOAD_SUCCESS, PROFILE_LOAD_FAILURE} from "actions/profile";
import React from "react";

const initialState = {
    profile: {},
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD_REQUEST:
            return {
                ...state
            };
        case PROFILE_LOAD_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            };
        case PROFILE_LOAD_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};