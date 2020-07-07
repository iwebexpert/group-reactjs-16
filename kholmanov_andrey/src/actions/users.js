/**
 * Created by Rusich on 30.06.2020.
 */

export const USER_LOAD_REQUEST = 'USER_LOAD_REQUEST';
export const USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS';
export const USER_LOAD_FAILTURE = 'USER_LOAD_FAILTURE';
export const CHANGE_USERNAME = 'CHANGE_USERNAME';


//redux-thunk
export const userLoadApiRequest = () => ({
    type: USER_LOAD_REQUEST,
});

export const userLoadApiSuccess = (data) => ({
    type: USER_LOAD_SUCCESS,
    payload: data,
});

export const userLoadApiFailture = (error) => ({
    type: USER_LOAD_FAILTURE,
    payload: error,
});

export const userLoadApi = () => {
    return async (dispatch) => {
        try {
            dispatch(userLoadApiRequest());
            // const result = (await fetch('/api/user.json'));
            const result = (await fetch('http://localhost:5000/profile'));
            dispatch(userLoadApiSuccess(await result.json()));
        } catch(error){
            dispatch(userLoadApiFailture(error));
        }
    }
};

export function changeUsername( username ) {
    return {
        type: CHANGE_USERNAME, username
    };
}