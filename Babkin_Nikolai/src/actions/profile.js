export const PROFILE_GET = 'PROFILE_GET';
export const PROFILE_SET = 'PROFILE_SET';

export const profileGet = () => ({
    type: PROFILE_GET,
})

export const profileSet = (name) => ({
    type: PROFILE_SET,
    payload: {name: sessionStorage.getItem('name')},
})

//redux-api-middleware
export const PROFILE_GET_REQUEST = 'PROFILE_GET_REQUEST';
export const PROFILE_GET_SUCCESS = 'PROFILE_GET_SUCCESS';
export const PROFILE_GET_FAILURE = 'PROFILE_GET_FAILURE';

export const PROFILE_SET_REQUEST = 'PROFILE_SET_REQUEST';
export const PROFILE_SET_SUCCESS = 'PROFILE_SET_SUCCESS';
export const PROFILE_SET_FAILURE = 'PROFILE_SET_FAILURE';

import {createAction} from "redux-api-middleware";

export const profileGetApi = () => createAction({
    endpoint: 'http://localhost:5000/profile',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [PROFILE_GET_REQUEST, PROFILE_GET_SUCCESS, PROFILE_GET_FAILURE],
})

export const profileSetApi = (name) => createAction({
    endpoint: `http://localhost:5000/profile/create?name=${name}`,
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [PROFILE_SET_REQUEST, PROFILE_SET_SUCCESS, PROFILE_SET_FAILURE],
})