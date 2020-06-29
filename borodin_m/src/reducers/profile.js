import {PROFILE_LOAD} from "actions/profile";
import React from "react";

const profileData = {
    name: 'Вася',
    birthday: '01.01.2000',
    city: 'Москва',
    email: 'vasya2000@moscow.ru'
};

const initialState = {
    profile: {},
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                profile: profileData
            };
        default:
            return state;
    }
};